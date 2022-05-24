import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const Profile = () => {
  const [user,loading] = useAuthState(auth);
  if(loading){
    return <Loading />
  }
  console.log(user);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-sm pt-3 mt-5 border">
        {/* <div
          className={
            user.photoURL === 'null' ? "hidden" : `flex justify-start pl-5`
          }
        >
          <img
            className="block text-left  rounded-full"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </div> */}
        <div className="card-body">
          <h2 className="card-title">Name: {user?.displayName}</h2>
          <p>{user.email}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
