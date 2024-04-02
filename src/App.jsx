import { useSelector } from "react-redux";
import UserList from "./pages/UserList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const loggedInUser = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedInUser) navigate("/login");
  }, []);
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;
