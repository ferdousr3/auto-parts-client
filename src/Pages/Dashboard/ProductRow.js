import React from "react";

const ProductRow = ({ Product, index, refetch,setDeletingProduct }) => {
  const { img, name, specialty, email } = Product;

  
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
        <td>{specialty}</td>
        <td>
          <label
           onClick={()=>setDeletingProduct(Product)}
            for="delete-confirm-modal"
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
