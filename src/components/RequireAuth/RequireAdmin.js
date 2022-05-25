import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";

import VerifyUser from "../VerifyUser/VerifyUser";

const RequireAdmin = ({ children }) => {
  //  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();
  if (loading || adminLoading) {
    return <Loading />;
  }
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(user && !admin){
    return <VerifyUser />;
  }
  // for verify user
  // if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
  //   return <VerifyUser />;
  // }
  return children;
};

export default RequireAdmin;
