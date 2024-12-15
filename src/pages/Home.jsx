import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <>
        <p>Home Page</p>
        <NavLink to={"/app"}>
          <h3>App &rarr;</h3>
        </NavLink>
      </>
    </div>
  );
}
