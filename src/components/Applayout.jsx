import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Applayout() {
  const someOneIsAuth = useSelector((state) => state.users.isAuthentificated);
  // const AuthUser = useSelector((state) => state.users.AuthentificatedUser);
  const navigate = useNavigate();
  // console.log(someOneIsAuth, AuthUser);

  useEffect(
    function () {
      someOneIsAuth === false && navigate("/");
    },
    [someOneIsAuth, navigate]
  );
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
