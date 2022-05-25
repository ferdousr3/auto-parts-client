
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ProfileUpdateModal = ({ profile,  setProfile }) => {
  const [user] = useAuthState(auth);
  const {  name } = profile;

 const {
   register,
   formState: { errors },
   handleSubmit,
   reset,
 } = useForm();
   const imageStorageKey = "396c01ff41dfa2f53913961308fb5a70";

   const onSubmit = async (data) => {
     const image = data.image[0];
     const formData = new FormData();
     formData.append("image", image);
     const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
     fetch(url, {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       .then((result) => {
         if (result.success) {
           const img = result.data.url;
           const newUser = {
             name: user.displayName,
             email: user.email,
             address: data.address,
             phone: data.phone,
             fbLink: data.fbLink,
             img: img,
           };
           // Product data sent to database
           const url = `http://localhost:5000/newUser`;
           console.log(newUser);
           fetch(url, {
             method: "POST",
             headers: {
               "content-type": "application/json",
               authorization: `Bearer ${localStorage.getItem("accessToken")}`,
             },
             body: JSON.stringify(newUser),
           })
             .then((res) => res.json())
             .then((inserted) => {
               if (inserted.insertedId) {
                 toast.success(`user ${data.name} add successfully`);
                 reset();
               } else toast.error(`user ${data.name} add to failed`);
             });
         }
        //  console.log(result);
       });
   };

  return (
    <>
      <input
        type="checkbox"
        id="user-add-modal"
        className="modal-toggle top-8"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <label
            htmlFor="user-add-modal"
            className="btn btn-sm btn-error text-black btn-circle absolute mt-10 right-2 top-4"
          >
            ✕
          </label>
          <h3 className="font-semibold text-sm text-center py-2 mt-10">
            add{name}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <div className="form-control w-full max-w-xs mx-auto  ">
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
            <div className="form-control w-full max-w-xs mx-auto ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user.displayName}
                disabled
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
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
                {errors.name?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/*quantity*/}
            <div className="form-control w-full max-w-xs mx-auto ">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is Required",
                  },
                  minLength: {
                    value: 10,
                    message: "Must be 10 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>
            {/*Price*/}
            <div className="form-control w-full max-w-xs mx-auto ">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.address.message}
                  </span>
                )}
                {errors.address?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.address.message}
                  </span>
                )}
                {errors.address?.type === "maxLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            {/* description */}
            <div className="form-control w-full max-w-xs mx-auto ">
              <label className="label">
                <span className="label-text">Facebook Link</span>
              </label>
              <input
                type="text"
                placeholder="Facebook Link"
                className="input input-bordered w-full max-w-xs"
                {...register("fbLink", {
                  required: {
                    value: true,
                    message: "facebook Link is Required",
                  },
                  minLength: {
                    value: 5,
                    message: "Must be 3 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.dfblink?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.dfblink.message}
                  </span>
                )}
                {errors.dfblink?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.dfblink.message}
                  </span>
                )}
              </label>
            </div>
            {/* photo */}
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="  max-w-xs block w-full"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>

            <input
              type="submit"
              value="Add"
              className=" mx-auto block  text-center btn w-full max-w-xs text-white  btn-secondary bg-accent hover:bg-primary border-0 "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdateModal;
