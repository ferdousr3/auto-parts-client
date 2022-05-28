import { useEffect, useState } from "react";

const useUser = (user) => {
  const [newToken, setNewToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.displayName?.displayName;
    const currentUser = { email: email, name: name };
    if (email) {
      fetch(`https://auto-parts0.herokuapp.com/updateUser/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setNewToken(accessToken);
        });
    }
  }, [user]);
  return [newToken];
};

export default useUser;
