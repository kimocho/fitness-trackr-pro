import { useAuth } from "../auth/AuthContext";
import { Link } from 'react-router';

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <Link to="/">Activities</Link>
        {token ? (
          <Link to="/auth">Log out</Link>
        ) : (
          <>
            <Link to="/auth">Register</Link>
            <Link to="/auth">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
