import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import VerifyAdmin from "../../components/VerifyAdmin/VerifyAdmin";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const Product = {
      name: user.displayName,
      email: user.email,
      rating: data.rating,
      title: data.title,
      description: data.description,
    };
    // Product data sent to database
    const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(Product),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success(`${data.rating} star review add successfully`);
          reset();
        } else toast.error(`${data.rating} star review add to failed`);
      });
  };

  if (loading || adminLoading) {
    return <Loading />;
  }
  if (!admin) {
    return <VerifyAdmin />;
  }

  return (
    <>
      <PageTitle title="Add Review" />
      <div className="container mx-auto lg:py-20 flex justify-center items-center">
        <div className="card w-96 bg-base-100 lg:border lg:border-bordercolor">
          <div className=" p-0 md:px-10 md:py-10 card-body">
            <h2 className="text-lg font-normal text-accent text-center">
              Add your Review
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user.email || ""}
                  disabled
                  className="input input-bordered w-full max-w-xs"
                  {...register("email")}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* name*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={user.displayName}
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    minLength: {
                      value: 3,
                      message: "Must be 3 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* name*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Your title"
                  className="input input-bordered w-full max-w-xs"
                  {...register("title", {
                    minLength: {
                      value: 3,
                      message: "Must be 3 characters or longer",
                    },
                    maxLength: {
                      value: 30,
                      message: "Must be 30 characters or lower",
                    },
                  })}
                />
                <label className="label">
                  {errors.title?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.title.message}
                    </span>
                  )}
                  {errors.title?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.title.message}
                    </span>
                  )}
                  {errors.title?.type === "maxLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.title.message}
                    </span>
                  )}
                </label>
              </div>
              {/* rating*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Stars (5)"
                  className="input input-bordered w-full max-w-xs"
                  {...register("rating", {
                    required: {
                      value: true,
                      message: "Rating is Required",
                    },
                    minLength: {
                      value: 1,
                      message: "Must be 1 characters or longer",
                    },
                    maxLength: {
                      value: 2,
                      message: "Must be 1 characters or Lower",
                    },
                    pattern: {
                      value: /^[1-5]\d*(?:\.\d+)?$/,
                      message: "Provide a valid rating(1-5)",
                    },
                  })}
                />
                <label className="label">
                  {errors.rating?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.rating.message}
                    </span>
                  )}
                  {errors.rating?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.rating.message}
                    </span>
                  )}
                  {errors.rating?.type === "maxLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.rating.message}
                    </span>
                  )}
                  {errors.rating?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.rating.message}
                    </span>
                  )}
                </label>
              </div>
              {/* description */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  cols="10"
                  rows="5"
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full max-w-xs"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                    minLength: {
                      value: 5,
                      message: "Must be 3 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.description?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.description.message}
                    </span>
                  )}
                  {errors.description?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                type="submit"
                value="Add"
                className="btn w-full max-w-xs text-white  btn-secondary bg-accent hover:bg-primary border-0 "
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReview;
