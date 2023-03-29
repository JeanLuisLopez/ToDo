import { Link } from "react-router-dom";
import RegisterForm from "../../components/Form/RegisterForm";
import styles from "./signup.module.css";

function Register() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Register</h3>
      <RegisterForm />
      <p className={styles.redirect}>
        Already have an account? <Link to="/login">Login now</Link>
      </p>
    </div>
  );
}

export default Register;
