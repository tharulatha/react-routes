import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

export const NavBar = () => {
  const NavActiveLink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();
  return (
    <div>
      <nav className="nav-bar">
        <NavLink style={NavActiveLink} to={"/"}>
          Home
        </NavLink>
        <NavLink style={NavActiveLink} to={"about"}>
          About
        </NavLink>
        <NavLink style={NavActiveLink} to={"product"}>
          Product
        </NavLink>
        <NavLink style={NavActiveLink} to={"users"}>
          Users
        </NavLink>
        <NavLink style={NavActiveLink} to={"profile"}>
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink style={NavActiveLink} to={"login"}>
            Login
          </NavLink>
        )}
              {/* <NavLink style={NavActiveLink} to={"login"}>
            Login
          </NavLink> */}
      </nav>
    </div>
  );
};
