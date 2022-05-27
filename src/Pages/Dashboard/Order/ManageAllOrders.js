import React from "react";
import { useQuery } from "react-query";
import Loading from '../../../components/Loading/Loading';
import PageTitle from "../../../components/Share/PageTitle/PageTitle";
import AllOrdersRow from "./AllOrdersRow";

const ManageAllOrders = () => {
  const { data: orders, isLoading } = useQuery("orderr", () =>
    fetch("http://localhost:5000/order", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
if(isLoading){
  return <Loading />
}
  return (
    <>
      <PageTitle title="All orders" />
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <div className="py-5">
            <p>
              Total Order: {orders?.length}
            </p>
          </div>
          <table className="table w-full">
            <thead>
              <tr>
                <th>sn</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <AllOrdersRow key={index} index={index} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageAllOrders;
