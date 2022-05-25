import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import ProfileUpdateModal from "./ProfileUpdateModal";
import ProfileCard from "./ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ProfileEditModal from "./ProfileEditModal";

const ProfilePerUser = (id) => {
  const [profile, setProfile] = useState(null);
  const [user] = useAuthState(auth);
  const { email } = user;
  const {
    data: newUser,
    isLoading,
    refetch,
  } = useQuery("newUser", () =>
    fetch(`http://localhost:5000/newUser/${email}`).then((res) => res.json())
  );
  
  return (
    <>
      <div className="pb-14"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <ProfileCard
          user={user}
          setProfile={setProfile}
          refetch={refetch}
          newUser={newUser}
        />
      </div>
      {profile && (
        <ProfileUpdateModal profile={profile} setProfile={setProfile} />
      )}
      {profile && (
        <ProfileEditModal
          newUser={newUser}
          profile={profile}
          setProfile={setProfile}
        />
      )}
    </>
  );
};

export default ProfilePerUser;
