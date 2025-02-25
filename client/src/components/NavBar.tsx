import { Link } from "react-router-dom";
import { logout } from "../lib/auth";
import { User } from "../models/user";

interface NavBarProps {
  user: User | null;
  onLogout: VoidFunction;
}

export function NavBar({ user, onLogout }: NavBarProps) {
  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
      </div>
      {user ? (
        <div className="navbar-end">
          <span className="navbar-item has-text-grey">{user.email}</span>
          <Link className="navbar-item" to="/jobs/new">
            Post Job
          </Link>
          <a className="navbar-item" onClick={handleLogout}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navbar-end">
          <Link className="navbar-item" to="/login">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
