import React from "react";

const ProfileCard = ({ user, setProfile, updatedUser, dataRecall }) => {
  return (
    <>
      <div className="card bg-base-100 shadow border max-w-xl pr-2">
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
            Email:
            <span className="text-xs font-medium text-accent">
              {updatedUser?.email}
            </span>
          </h1>
          <h2 className="card-title   text-accent font-normal text-sm m-0 ">
            Name:
            <span className="text-xs font-medium text-accent">
              {updatedUser?.name}
            </span>
          </h2>
          <div className={updatedUser === undefined ? "hidden" : "block"}>
            {updatedUser && (
              <>
                <div className="div">
                  <h3>
                    Phone:
                    <span className="text-xs font-medium text-accent ml-1">
                      {updatedUser?.phone}
                    </span>
                  </h3>
                </div>
                <div className="div">
                  <h3>
                    Address:
                    <span className="text-xs font-medium text-accent ml-1">
                      {updatedUser?.address}
                    </span>
                  </h3>
                </div>
                <div className="div">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={updatedUser?.fbLink}
                    className="text-primary"
                  >
                    Facebook
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="card-actions">
            <label
              onClick={() => setProfile({ user, dataRecall })}
              htmlFor="user-add-modal"
              className=" badge badge-outline"
            >
              Update information
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
