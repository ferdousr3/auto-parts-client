import React from "react";
import { useQuery } from "react-query";
import PageTitle from "../../components/Share/PageTitle/PageTitle";

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
  console.log(orders);
  return (
    <>
      <PageTitle title="All orders" />
      <div className="container mx-auto">
        <div class="overflow-x-auto">
          <table class="table w-full">
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
                <tr>
                  <th>{index + 1}</th>
                  <td>{order?.name}</td>
                  <td>{order?.price}</td>
                  <td>{order?.quantity}</td>
                  <td>{order?.status}</td>
                  <td>delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageAllOrders;
