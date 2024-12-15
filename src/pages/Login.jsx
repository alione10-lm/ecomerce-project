import { useState } from "react";
import LoginForm from "../features/Login/LoginForm";
import SignUpFrom from "../features/Login/SignUpFrom";
import { FaReact } from "react-icons/fa6";

function Login() {
  const [SignUp, setSignUp] = useState(false);
  const [LogIn, setLogIn] = useState(true);

  // const someOneIsAuth = useSelector((state) => state.users.isAuthentificated);
  // const AuthUser = useSelector((state) => state.users.AuthentificatedUser);
  // const username = AuthUser.username;

  function LoginSession() {
    setSignUp(false);
    setLogIn(true);
  }
  function SingUpSession() {
    setLogIn(false);
    setSignUp(true);
  }
  // someOneIsAuth === true && navigate("/app");

  return (
    <div className="w-full h-screen flex bg-slate-100  items-center p-4  ">
      <div className="grid grid-cols-2 h-[100%] w-full">
        <div className="bg-no-repeat  bg-cover bg-[url('https://images.pexels.com/photos/6214470/pexels-photo-6214470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"></div>
        <div className="flex w-full flex-col h-full   items-center justify-center">
          <div className="animate-bounce mb-2">
            <FaReact className="animate-spin " size={48} color="#334155" />
          </div>

          <div className=" flex rounded-lg   px-20 justify-center items-center">
            {LogIn && <LoginForm SingUpSession={SingUpSession} />}
            {SignUp && <SignUpFrom LoginSession={LoginSession} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
