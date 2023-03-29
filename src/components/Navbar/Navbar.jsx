import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Navbar.module.css";

function Navbar() {
  const { user, signout } = useAuth();
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/tasks" className={styles.homeLink}>
          To Do
        </Link>
        {user ? (
          <BiLogOut size={28} onClick={signout} className={styles.logoutBtn} />
        ) : (
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
