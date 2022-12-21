import React from "react";
import { toast } from "react-toastify";

const AllOrdersRow = ({ index, order, refetch }) => {
  const { _id } = order;
  const shipping = () => {
    const url = `https://auto-parts-yer9.onrender.com/order/shipping/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to shipping`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`successfully  shipping`);
        }
      });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{order?.name}</td>
        <td>$ {order?.price}</td>
        <td>{order?.quantity}</td>
        <td>
          {order.paid ? (
            <span className="badge badge-primary">Paid</span>
          ) : (
            <span className="badge badge-accent">{order?.status}</span>
          )}
        </td>
        <td>
          {order.shipping ? (
            <span className="badge bg-indigo-600 text-slate-300 ">Delivered</span>
          ) : (
            <>
              {order.paid ? (
                <button onClick={shipping} className="badge badge-primary">
                  Pending
                </button>
              ) : (
                <span className="badge badge-accent">{order?.status}</span>
              )}
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default AllOrdersRow;
