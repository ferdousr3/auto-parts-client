
import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const VerifyUser = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  return (
    <>
      <div className="container">
        <div className="w-full container my-10 lg:my-32 mx-auto max-w-xs p-4 text-accent bg-white rounded-lg border dark:bg-gray-800 dark:text-gray-400">
          <div className="flex">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-secondary bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
              <BsEnvelope />
            </div>
            <div className="ml-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold text-main dark:text-white">
                Your Email is not Verified
              </span>

              <div className="mb-2 text-sm font-normal text-accent">
                Please verify your email
              </div>
              <div className="mb-2 text-sm font-normal text-accent">
                Not Receive verify link sent again
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <button
                    className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center bg-main rounded-lg  focus:outline-none bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:transition-colors duration-400 text-white "
                    onClick={async () => {
                      await sendEmailVerification();
                      //  toast("Sent Verification Link");
                    }}
                  >
                    Sent again
                  </button>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyUser;
