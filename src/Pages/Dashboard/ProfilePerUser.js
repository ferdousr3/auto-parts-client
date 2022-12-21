import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import ProfileCard from "./ProfileCard";
import ProfileUpdateModal from "./ProfileUpdateModal";

const ProfilePerUser = (id) => {
  const [profile, setProfile] = useState(null);
  const [user] = useAuthState(auth);
  const { email } = user;
  const { data: updatedUser, refetch } = useQuery(["updatedUser", email], () =>
    fetch(`https://auto-parts-yer9.onrender.com/updatedUser/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const dataRecall = refetch();
  return (
    <>
      <div className="pb-14"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <ProfileCard
          user={user}
          setProfile={setProfile}
          dataRecall={dataRecall}
          updatedUser={updatedUser}
        />
      </div>
      {profile && (
        <ProfileUpdateModal
          refetch={refetch}
          profile={profile}
          setProfile={setProfile}
        />
      )}
    </>
  );
};

export default ProfilePerUser;
