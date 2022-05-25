import React, { useEffect } from "react";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import { FaGoogle } from "react-icons/fa";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user || gUser)
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  if (loading || gLoading || sending) {
    return <Loading />;
  }

  let signInError;
  if (error || gError) {
    signInError = (
      <p className="label-text-alt text-red-600 mb-3 ml-1">
        {error?.message || gError?.message}
      </p>
    );
  }
  const handleSignWithGoogle = () => {
    signInWithGoogle();
  };
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const forgotPassword = async (event) => {
    const email = watch('email')
    await sendPasswordResetEmail(email);
    
  };
  return (
    <>
      {/* !<---page title-----> */}
      <PageTitle title="Login" />
      <div className="container mx-auto lg:py-32 flex justify-center items-center">
        <div className="card w-96 bg-base-100 lg:border lg:border-bordercolor">
          <div className="p-0 md:px-10 md:py-10 card-body">
            <h2 className="text-lg font-normal text-accent text-center">
              Login
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                value="Login"
                className="btn w-full max-w-xs text-white  btn-secondary bg-accent hover:bg-primary border-0 "
              />
            </form>
            <div className="div">
              <button
                onClick={forgotPassword}
                className="text-secondary  text-sm mb-1 ml-1"
              >
                Forgot Password
              </button>
            </div>
            <p className="text-xs md:text-sm text-accent mt-1 font-medium  pl-1">
              New Auto Parts?
              <Link to="/signup" className="text-secondary pl-1">
                Create new Account
              </Link>
            </p>
            <div className="divider text-accent ">OR</div>
            {/* google signIn button  */}
            <button
              onClick={() => handleSignWithGoogle()}
              className="text-accent px-4 btn btn-outline flex items-center pt-[2px] border border-accent hover:bg-accent"
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

export default Login;
