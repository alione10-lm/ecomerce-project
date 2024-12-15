import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <NavLink to={"/app"}> &larr; back to app</NavLink>
    </div>
  );
}

export default PageNotFound;
