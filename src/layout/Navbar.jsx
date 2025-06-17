import { useAuth } from "../auth/AuthContext";
import { Link } from 'react-router';

/** Navbar with site navigation links */
export default function Navbar() {
  const { token } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <Link to="../activities/ActivitiesPage.jsx">Activities</Link>
        {token ? (
          <Link to="/logout">Log out</Link>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
