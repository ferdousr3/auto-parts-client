import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import PageTitle from "../../../components/Share/PageTitle/PageTitle";
import auth from "../../../firebase.init";
const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/singleOrder?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            Navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);
  // const [deletingOrder, setDeletingOrder] = useState(null);
  // const {
  //   data: products,
  //   isLoading,
  //   refetch,
  // } = useQuery("products", () =>
  //   fetch("http://localhost:5000/products", {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      <PageTitle title="My Order" />

      <p className="mb-2 ml-2 text-sm  text-accent ">
        My Total Orders: {orders.length}
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>stats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>Cancel</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyAppointment;
