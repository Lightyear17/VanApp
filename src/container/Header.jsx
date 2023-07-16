import { NavLink, Link } from "react-router-dom";
import vanlife from "../vanlife.png";
import UserLogo from "../user.png";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}

  // const logoStyle = {

  //   borderbottom: '.1 rem',
  //   color: 'black',
  //   borderbottomstyle: 'groove',
  //   borderbottomwidth: '0.1rem',

  // }
  return (
    <nav className="nav-bar" style={{ paddingLeft: "2rem" }}>
      <Link to="/" id="logo">
        <img src={vanlife} alt="vanlife" id="homeimg" />
      </Link>
      <NavLink
        to="/about"
        className="links"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        About
      </NavLink>
      <NavLink
        to="/vans"
        className="links"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Vans
      </NavLink>
      <NavLink
        to="/host"
        className="links"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Host
      </NavLink>

      <NavLink
        to="/login"
        className="links"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        <img src={UserLogo} alt="UserLogo" className="userlogo" />
      </NavLink>
      <button onClick={fakeLogOut}>X</button>
    </nav>
  );
}
