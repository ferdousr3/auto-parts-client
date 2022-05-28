import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading/Loading";
import PageTitle from "../../../components/Share/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import DeleteOrderModal from "./DeleteOrderModal";
import OrderRow from "./OrderRow";
const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [deletingOrder, setDeletingOrder] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["products", user.email], () =>
    fetch(`https://auto-parts0.herokuapp.com/singleOrder?email=${user.email}`, {
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
              <th>shipping</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders?.map((order, index) => (
              <OrderRow
                key={index}
                index={index}
                order={order}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteOrderModal
          setDeletingOrder={setDeletingOrder}
          refetch={refetch}
          deletingOrder={deletingOrder}
        />
      )}
    </>
  );
};

export default MyAppointment;
