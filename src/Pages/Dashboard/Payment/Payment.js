import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import PageTitle from "../../../components/Share/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import CheckoutForm from "./CheckoutForm ";




const stripePromise = loadStripe(
  "pk_test_51L45nUEuy5ZAsUBvgyeCiHWqZYEO1AyFl1wnxkXD5fY0H4wP4ETZXEwc0nVl8y25RJ1nYCydoclrwIUo5iqxpBsn00SNBKwJrt"
);

const Payment = () => {
 const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://auto-parts0.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />; 
  }
 
  return (
    <>
      <PageTitle title="Payment" />
      <div className="container mx-auto">
        <div className="card w-96 bg-base-100 shadow-sm border">
          <div className="card-body">
            <p className=" text-base text-primary pt-2 capitalize ">
              hello ! {user?.displayName}.
            </p>
            <h2 className="py-0 text-sm font-medium">
              Please Pay for {order?.name}
            </h2>
            <p className="text-sm text-accent font-medium">
              Your Order Quantity :{" "}
              <span className="text-primary">{order.quantity}</span> /{" "}
              <span className="text-xs">unit</span>{" "}
            </p>
            <p className="text-sm text-accent font-medium">
              Please pay : <span className="text-primary">$ {order.price}</span>
            </p>
          </div>
          <div className="card-body border shadow-lg  rounded-lg">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
