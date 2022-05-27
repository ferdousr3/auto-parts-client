import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading/Loading";
import PageTitle from "../../../components/Share/PageTitle/PageTitle";
import auth from "../../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // const { data: services, isLoading } = useQuery("services", () =>
  //   fetch("http://localhost:5000/service").then((res) => res.json())
  // );

  const imageStorageKey = "396c01ff41dfa2f53913961308fb5a70";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const Product = {
            name: data.name,
            email: user.email,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            img: img,
          };
          // Product data sent to database
          const url = `http://localhost:5000/Products`;
          console.log(Product);
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(Product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success(`Product ${data.name} add successfully`);
                reset();
              } else toast.error(`Product ${data.name} add to failed`);
            });
        }
        console.log(result);
      });
  };

  

  return (
    <>
      <PageTitle title="Add New Product" />
      <div className="container mx-auto lg:py-20 flex justify-center items-center">
        <div className="card w-96 bg-base-100 lg:border lg:border-bordercolor">
          <div className=" p-0 md:px-10 md:py-10 card-body">
            <h2 className="text-lg font-normal text-accent text-center">
              Add a Product
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user.email || ""}
                  disabled
                  className="input input-bordered w-full max-w-xs"
                  {...register("email")}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* name*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Must be 3 characters or longer",
                    },
                    pattern: {
                      value: /^[A-Za-z]/,
                      message: "Provide a valid Name",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              {/*quantity*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Quantity is Required",
                    },
                    minLength: {
                      value: 2,
                      message: "Must be 2 characters or longer",
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
              {/*Price*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is Required",
                    },
                    minLength: {
                      value: 2,
                      message: "Must be 2 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.price.message}
                    </span>
                  )}
                  {errors.price?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              {/* description */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  cols="10"
                  rows="5"
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full max-w-xs"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                    minLength: {
                      value: 5,
                      message: "Must be 3 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.description?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.description.message}
                    </span>
                  )}
                  {errors.description?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
              {/* photo */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="  max-w-xs block w-full"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                type="submit"
                value="Add"
                className="btn w-full max-w-xs text-white  btn-secondary bg-accent hover:bg-primary border-0 "
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
