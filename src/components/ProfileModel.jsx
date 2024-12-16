import { HiArrowRightStartOnRectangle, HiMiniUser } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function ProfileModel({ setIsOpen }) {
  return (
    <div className="fixed z-50 border border-slate-200 px-5 py-4 items-start justify-center  backdrop-blur-md  bg-white  divide-slate-300 shadow-xl  top-[3.5rem] rounded-lg flex flex-col right-6">
      <NavLink
        to="user"
        onClick={() => setIsOpen(false)}
        className="flex  hover:bg-slate-50 transition-colors rounded-lg text-slate-700 font-semibold  duration-200 w-full  px-4 py-1 items-center gap-2"
      >
        <HiMiniUser />
        personal profile
      </NavLink>
      <NavLink
        to="/"
        className="flex hover:bg-slate-50 transition-colors rounded-lg text-slate-700 font-semibold duration-200  w-full  px-4 py-1 items-center gap-1"
      >
        <HiArrowRightStartOnRectangle />
        logout
      </NavLink>
    </div>
  );
}

export default ProfileModel;
