import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import ProfileUpdateModal from "./ProfileUpdateModal";
import ProfileCard from "./ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const ProfilePerUser = (id) => {
  const [profile, setProfile] = useState(null);
  const [user] = useAuthState(auth);
  const { email } = user;
  const { data: updatedUser, refetch } = useQuery("updatedUser", () =>
    fetch(`http://localhost:5000/updatedUser/${email}`).then((res) =>
      res.json()
    )
  );

  return (
    <>
      <div className="pb-14"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <ProfileCard
          user={user}
          setProfile={setProfile}
          refetch={refetch}
          updatedUser={updatedUser}
        />
      </div>
      {profile && (
        <ProfileUpdateModal profile={profile} setProfile={setProfile} />
      )}

    </>
  );
};

export default ProfilePerUser;
