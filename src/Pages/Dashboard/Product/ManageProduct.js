import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://auto-parts-yer9.onrender.com/products", {
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
      <h2>Total Products {products?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sn</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <DeleteConfirmModal
          setDeletingProduct={setDeletingProduct}
          refetch={refetch}
          deletingProduct={deletingProduct}
        />
      )}
    </>
  );
};

export default ManageProduct;
