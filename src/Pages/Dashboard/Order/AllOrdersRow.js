import React from 'react';

const AllOrdersRow = ({index,order}) => {
 
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{order?.name}</td>
        <td>{order?.price}</td>
        <td>{order?.quantity}</td>
        <td>
          {order.paid ? (
            <span className="badge badge-primary">Paid</span>
          ) : (
            <span className="badge badge-accent">{order?.status}</span>
          )}
        </td>
        <td>
          {order.paid ? (
            <span className="badge badge-primary">Pending</span>
          ) : (
            <span className="badge badge-accent">{order?.status}</span>
          )}
        </td>
      </tr>
    </>
  );
};

export default AllOrdersRow;