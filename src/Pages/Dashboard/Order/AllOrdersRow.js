import React from 'react';

const AllOrdersRow = ({index,order}) => {
 
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{order?.name}</td>
        <td>{order?.price}</td>
        <td>{order?.quantity}</td>
        <td>{order?.status}</td>
        <td>delete</td>
      </tr>
    </>
  );
};

export default AllOrdersRow;