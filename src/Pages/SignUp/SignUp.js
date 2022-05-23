import React, { useEffect } from "react";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import { FaGoogle } from "react-icons/fa";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser)
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, [user, gUser,navigate,token]);
  if (loading || gLoading || updating) {
    return <Loading />;
  }

  let signInError;
  if (error || gError || updateError) {
    signInError = (
      <p className="label-text-alt text-red-600 mb-3 ml-1">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }
  const handleSignWithGoogle = () => {
    signInWithGoogle();
  };
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <>
      {/* !<---page title-----> */}
      <PageTitle title="Sign Up" />
      <div className="container mx-auto lg:py-32 flex justify-center items-center">
        <div className="card w-96 bg-base-100 lg:border lg:border-bordercolor">
          <div className="card-body">
            <h2 className="text-lg font-normal text-accent text-center">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* password */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Must be 3 characters or longer",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Provide a valid Name",
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
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* email */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="exmpl@mail.com"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
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
              {/* password */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {/* firebase error */}
              <div className="">{signInError}</div>
              <input
                type="submit"
                value="Sign Up"
                className="btn w-full max-w-xs text-white  btn-secondary bg-accent hover:bg-primary border-0"
              />
            </form>
            <p className="text-xs md:text-sm text-accent mt-2 font-medium pl-1">
              Already have an account?
              <Link to="/login" className="text-secondary pl-1">
                Please login
              </Link>
            </p>
            <div className="divider text-accent">OR</div>
            {/* google signIn button  */}
            <button
              onClick={() => handleSignWithGoogle()}
              className=" text-accent px-4 btn btn-outline flex items-center pt-[2px] border border-accent hover:bg-accent"
            >
              <FaGoogle className="mr-5 text-lg" />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
