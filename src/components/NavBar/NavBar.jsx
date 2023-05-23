import "./NavBar.css";
import { NavLink } from "react-router-dom";
import * as userService from '../../utilities/users-service';

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
      <span>Welcome, { user.name }, Feel free to Explore the world of Mandala! </span>
      <NavLink to="" onClick={ handleLogOut }><div className="right-nav-element-wrapper" id="z-index10">
          <div className="right-nav-element">Log Out!</div>
        </div></NavLink>
    </div>
  );
}
