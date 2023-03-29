import { Link } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Login</h3>
      <LoginForm />
      <p className={styles.redirect}>
        Don't have an account? <Link to="/register">Register now</Link>
      </p>
    </div>
  );
}

export default Login;
