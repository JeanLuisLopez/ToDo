import styles from "./Input.module.css";

function Input({ handleChange, handleBlur, type, name, placeholder, error }) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${error[name] ? styles.inputError : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error[name] && <h3 className={styles.errorMessage}>{error[name]}</h3>}
    </div>
  );
}

export default Input;
