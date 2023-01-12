/*import { Link, NavLink, useMatch } from "react-router-dom";
import "./Head.css";
import logo from "../assets/tete.svg";

function LinkActive(page) {
  const match = useMatch("/" + page);
  return Boolean(match) ? "activeNav" : undefined;
}

function Head() {
  return (
    <>
      <div className="logo">
        <Link to="/" className={LinkActive("/")}>
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/a" className={LinkActive("/a")}>
          A
        </Link>
        <Link to="/b" className={LinkActive("/b")}>
          B
        </Link>
      </div>
      <div className="logo">
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
      </div>
    </>
  );
}
export default Head;*/
