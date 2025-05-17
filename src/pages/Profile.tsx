import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div className="container">
      <h1>Welcome {user?.name}</h1>
      <div>You registered on: {user?.registered}</div>
    </div>
  );
};

export default Profile;
