import React from "react";
import { useQuery } from "react-query";

const ProfileCard = ({ user, setProfile, newUser, refetch }) => {
  //  const { displayName, email } = user;
  // const { data: newUser, isLoading } = useQuery("newUser", () =>
  //   fetch(`http://localhost:5000/newUser/${email}`)
  //   .then((res) => res.json())

  // );
  // console.log(newUser);

  return (
    <>
      <div className="card bg-base-100 shadow border max-w-xl">
        <div className="card-body ">
          <div className={newUser === undefined ? "hidden" : "block"}>
            {newUser && (
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={newUser?.img} alt={newUser?.name} />
                </div>
              </div>
            )}
          </div>
          <h1 className="card-title  text-accent font-normal text-sm m-0 ">
            Email: {user.email}
          </h1>
          <h2 className="card-title  text-accent font-normal text-sm m-0 ">
            Name: {user?.displayName}
          </h2>
          <div className={newUser === undefined ? "hidden" : "block"}>
            {newUser && (
              <>
                <div className="div">
                  <h3>Phone: {newUser?.phone}</h3>
                </div>
                <div className="div">
                  <h3>Address: {newUser?.address}</h3>
                </div>
                <div className="div">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={newUser?.fbLink}
                    className="text-primary"
                  >
                    Facebook Link
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="card-actions">
            <label
              onClick={() => setProfile(user)}
              htmlFor="user-add-modal"
              className=" badge badge-outline"
            >
              Add information
            </label>
            <div className={newUser === undefined ? "hidden" : "block"}>
              <label
                onClick={() => setProfile(newUser)}
                htmlFor="user-edit-modal"
                className=" badge badge-outline"
              >
                Edit Profile
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
