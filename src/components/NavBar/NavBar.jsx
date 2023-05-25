import "./NavBar.css";
import { NavLink } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-slot">
        <div className="first nav-element-wrapper" id="z-index10">
          <div className="nav-element">Home</div>
        </div>
      </NavLink>
      <NavLink to="/profiles" className="nav-slot">
        <div className="nav-element-wrapper" id="z-index9">
          <div className="nav-element">Profiles</div>
        </div>
      </NavLink>
      <NavLink to="" onClick={handleLogOut}>
        <div className="right-nav-element-wrapper" id="z-index10">
          <div className="right-nav-element">Log Out!</div>
        </div>
      </NavLink>
    </div>
  );
}
