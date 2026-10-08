import { Link } from "react-router-dom";
import { useAuth } from "../context/authcontext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>🎓 Placement Portal</h2>

      <div className="nav-links">
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/applications">Applications</Link>
            <Link to="/interviews">Interviews</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/notifications">Notifications</Link>

            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;