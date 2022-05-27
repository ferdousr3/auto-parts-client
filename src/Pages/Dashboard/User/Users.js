import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading/Loading";
import VerifyAdmin from "../../../components/VerifyAdmin/VerifyAdmin";
import auth from "../../../firebase.init";

import useAdmin from "../../../hooks/useAdmin";
import UserRow from "./UserRow";

const Users = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading || loading || adminLoading) {
    return <Loading />;
  }
  if(!admin){
    return <VerifyAdmin />
  }

  return (
    <>
      <div className="my-3">
        <h2>Total users {users?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SN</th>
              <th>Email</th>
              <th>Access</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow
                key={user._id}
                refetch={refetch}
                user={user}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
