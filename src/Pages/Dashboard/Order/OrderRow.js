import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ index, order, setDeletingOrder }) => {
  return (
    <>
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{order.name}</td>
        <td>{order.quantity}</td>
        <td>{order.price}</td>
        {/* <td>{order.status}</td> */}
        <td>
          {order?.price && !order?.paid && (
            <Link
              to={`/dashboard/payment/${order._id}`}
              className="btn btn-primary  btn-xs"
            >
              Pay
            </Link>
          )}
          {order.price && order.paid && (
            <span className="btn btn-xs btn-active btn-secondary">Paid</span>
          )}
        </td>
        <td>
          {order.paid ? (
            <span className="btn btn-xs btn-active btn-secondary"> TransactionId:{order?.transactionId}</span>
          ) : (
            <label
              onClick={() => setDeletingOrder(order)}
              htmlFor="delete-order-modal"
              className=" btn btn-xs btn-error"
            >
              Delete
            </label>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrderRow;
