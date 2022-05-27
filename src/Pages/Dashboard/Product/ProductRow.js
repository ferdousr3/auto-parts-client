import React from "react";

const ProductRow = ({ product, index, refetch,setDeletingProduct }) => {
  const { name,quantity,img,price } = product;

  
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="avatar">
            <div className="w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
              <img src={img} alt={name} />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>
          <label
            onClick={() => setDeletingProduct(product)}
            htmlFor="delete-confirm-modal"
            className=" btn btn-xs btn-error"
          >
            Delete
          </label>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
