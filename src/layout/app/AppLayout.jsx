import { NavLink, Outlet } from "react-router-dom";
import "./AppLayout.css";
import logo from "../../assets/tete.svg";

function AppLayout() {
  return (
    <>
      <div className="logo">
        <header>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <NavLink
            to="/a"
            className={({ isActive, isPending }) => {
              return isActive ? "activeNav" : isPending ? "pending" : undefined;
            }}
          >
            A
          </NavLink>
          <NavLink
            to="/b"
            className={({ isActive }) => {
              return isActive ? "activeNav" : undefined;
            }}
          >
            B
          </NavLink>
          <NavLink
            to="/c"
            className={({ isActive }) => {
              return isActive ? "activeNav" : undefined;
            }}
          >
            C
          </NavLink>
        </header>
        <Outlet></Outlet>
      </div>
    </>
  );
}
export default AppLayout;
