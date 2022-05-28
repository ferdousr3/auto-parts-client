import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const OurProducts = () => {
 
  const {
    data: products,
    isLoading,
  
  } = useQuery("products", () =>
    fetch("https://auto-parts0.herokuapp.com/products").then((res) => res.json())
  );

  if(isLoading){
    return <Loading />
  }

  return (
    <>
      <SectionTitle
        title="Our Products"
        subTitle="We provide best quality car parts"
      />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5  ">
        {products?.slice(0, 6).map((product, index) => (
          <div key={index} className=" border border-{#ededed">
            <div className="md:flex gap-5 py-10 px-6">
              <div className="img">
                <img
                  className="w-48 lg:w-60"
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div className="">
                <h1 className="text-lg text-accent font-semibold my-1 ">
                  {product.name}
                </h1>
                <h2 className="text-sm text-neutral">
                  Available: {product.quantity} unit
                </h2>
                <h3 className="font-[700] text-primary text-2xl font-display">
                  ${product?.price}.00 / <span className="text-sm font-medium text-accent" >unit</span>
                </h3>
                <div className="my-2">
                  <Link
                    to={`/order/${product._id}`}
                    className=" py-3  px-8 flex justify-center rounded-sm  w-48 text-sm  font-medium  text-black border-0 uppercase bg-info hover:bg-secondary  hover:text-white hover:transition-colors duration-400"
                  >
                    Add To Card
                  </Link>
                </div>
                <h4 className=" text-sm mb-2 text-neutral">
                  Min Order : 10unit
                </h4>
                <p className="text-xs text-neutral">
                  {product.description.slice(0, 100)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurProducts;
