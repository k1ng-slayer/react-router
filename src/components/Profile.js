import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      Hola! {auth.user}
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
