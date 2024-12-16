import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileModel from "./ProfileModel";

export default function Applayout() {
  const someOneIsAuth = useSelector((state) => state.users.isAuthentificated);
  // const AuthUser = useSelector((state) => state.users.AuthentificatedUser);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  // console.log(someOneIsAuth, AuthUser);

  useEffect(
    function () {
      someOneIsAuth === false && navigate("/");
    },
    [someOneIsAuth, navigate]
  );

  return (
    <div>
      <NavBar setIsOpen={setIsOpen} />
      {isOpen && <ProfileModel setIsOpen={setIsOpen} />}
      <Outlet />
    </div>
  );
}
