import { Outlet, NavLink } from "react-router-dom";
import './container.css'
export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  };
  return (
    <div className="host-van-buttons">
      <nav
        className="host-nav"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "5rem",
          backgroundColor: "#fff7ed",
          paddingLeft: "2rem",
        }}
      >
        <NavLink
          to="/host"
          end
          className="links"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className="links"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          className="links"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
        <NavLink
          to="/host/vans"
          className="links"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
