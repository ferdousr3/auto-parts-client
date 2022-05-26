import React from "react";

const ProfileCard = ({ user, setProfile, updatedUser, refetch }) => {
  console.log(updatedUser);
  return (
    <>
      <div className="card bg-base-100 shadow border max-w-xl">
        <div className="card-body ">
          <div className={updatedUser === undefined ? "hidden" : "block"}>
            {updatedUser && (
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={updatedUser?.img} alt={updatedUser?.name} />
                </div>
              </div>
            )}
          </div>
          <h1 className="card-title  text-accent font-normal text-sm m-0 ">
            Email: {updatedUser?.email}
          </h1>
          <h2 className="card-title  text-accent font-normal text-sm m-0 ">
            Name: {updatedUser?.name}
          </h2>
          <div className={updatedUser === undefined ? "hidden" : "block"}>
            {updatedUser && (
              <>
                <div className="div">
                  <h3>Phone: {updatedUser?.phone}</h3>
                </div>
                <div className="div">
                  <h3>Address: {updatedUser?.address}</h3>
                </div>
                <div className="div">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={updatedUser?.fbLink}
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
              onClick={() => setProfile({ user, refetch })}
              htmlFor="user-add-modal"
              className=" badge badge-outline"
            >
              Add information
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
