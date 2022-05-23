import React from "react";
import {
  useAuthState,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

import VerifyUser from "../VerifyUser/VerifyUser";

const RequireAuth = ({ children }) => {
  //  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // for verify user
  // if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
  //   return <VerifyUser />;
  // }
  return children;
};

export default RequireAuth;
