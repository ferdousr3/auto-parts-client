import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Order = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [stringQuantity, setStringQuantity] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();
  const { id } = useParams();
  const { data: product, isLoading } = useQuery("product", () =>
    fetch(`https://auto-parts-yer9.onrender.com/product/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const inputQuantity = watch("quantity");
    const productPrice = parseFloat(product?.price);
    setOrderQuantity(data.quantity);
    if (parseFloat(data.quantity) > parseFloat(product?.quantity)) {
      setTotalPrice(
        <p className="text-xs text-red-500">Input Quantity is Higher</p>
      );
      setStringQuantity(
        <p className="text-xs text-red-500">Input Quantity is Higher</p>
      );
    } else if (parseFloat(data.quantity) <= 0) {
      setTotalPrice(
        <p className="text-xs text-red-500">Please input a valid quantity</p>
      );
      setStringQuantity(
        <p className="text-xs text-red-500">Please input a valid quantity</p>
      );
    } else {
      const totalPrice = productPrice * inputQuantity;
      setStringQuantity(0);
      setTotalPrice(totalPrice);
      setOrderPrice(totalPrice);
      reset();
    }
  };
  const orderSubmit = () => {
    const order = {
      email: user?.email,
      name: product?.name,
      price: orderPrice,
      quantity: orderQuantity,
      status: "unpaid",
    };
    const url = `https://auto-parts-yer9.onrender.com/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success(`Place  $ ${orderPrice}  successfully`);
          reset();
        } else toast.error(`Place  $ ${orderPrice}  failed`);
      });

    console.log(order);
    setOrderQuantity(0);
  };

  return (
    <>
      <PageTitle title="Order" />
      <div className="container mx-auto py-16 lg:py-16 ">
        <div className="card lg:w-96 bg-base-100 shadow-sm border mx-auto lg:text-center">
          <button onClick={() => navigate("/")} className="btn btn-link">
            Back to home
          </button>
          <h5 className="text-xs">Hello! {user.displayName} Please Order</h5>
          <h6 className="text-xs">Email: {user.email}</h6>

          <figure className="px-10 pt-10">
            <img
              src={product?.img}
              alt="Shoes"
              className="rounded-xl max-w-[5rem]"
            />
          </figure>
          <div className="card-body items-center ">
            {/* <h2 className="card-title">{product.name}</h2> */}
            <p className=" text-sm md:text-sm text-accent font-normal ">
              Name: <span className=" text-neutral ">{product?.name}</span>
            </p>
            <p className="text-lg text-accent font-normal">
              Price: <span className=" text-primary ">${product?.price}</span> /
              <span className="text-xs"> unit</span>
            </p>
            <p className="text-lg text-accent font-normal">
              Available:
              <span className=" text-primary ml-1 "> {product?.quantity}</span>
              <span className="text-xs"> unit</span>
            </p>
            <span className="text-xs text-indigo-700 ">
              Minimum Order Quantity 10
            </span>
            {/* show total order amount */}
            <span>
              {!stringQuantity && "$"} {totalPrice}
            </span>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*quantity*/}
              <div className="form-control w-full max-w-xs">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Price is Required",
                    },
                    minLength: {
                      value: 2,
                      message: "Must be 10  or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                type="submit"
                value="Calculate Amount"
                className="btn w-full max-w-xs text-white  btn-secondary bg-accent hover:bg-primary border-0 "
              />
            </form>

            <div className="card-actions">
              <button
                disabled={orderQuantity <= 0 || stringQuantity}
                onClick={orderSubmit}
                className="btn btn-primary"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
