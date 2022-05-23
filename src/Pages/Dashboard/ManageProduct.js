import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const {
    data: Products,
    isLoading,
    refetch,
  } = useQuery("Products", () =>
    fetch("http://localhost:5000/Product", {
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
      <h2>Total Products {Products?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sn</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((Product, index) => (
              <ProductRow
                key={Product._id}
                Product={Product}
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
