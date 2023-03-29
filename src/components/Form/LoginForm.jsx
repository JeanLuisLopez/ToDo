import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { supabase } from "../../supabase/client";
import ButtonWithRipple from "../ButtonWithRipple/ButtonWithRipple";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";

import styles from "./Form.module.css";

function LoginForm() {
  const [errorInValidation, setErrorInValidation] = useState(null);
  const [loading, setLoading] = useState(false);
  const login = async ({ password, email }) => {
    try {
      setLoading(true);
      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      setErrorInValidation(error);
    } finally {
      setLoading(false);
    }
  };

  const { handleChange, handleSubmit, errors, handleBlur } = useForm(
    {
      email: "",
      password: "",
    },
    login
  );
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div></div>
      <Input
        name={"email"}
        type={"email"}
        placeholder={"Youremail@email.com"}
        error={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <Input
        name={"password"}
        type={"password"}
        placeholder={"Password"}
        error={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <div>
        {errorInValidation && (
          <p className={styles.errorValidation}>Incorret email or password</p>
        )}
        <ButtonWithRipple>{loading ? <Loader /> : "Login"}</ButtonWithRipple>
      </div>
    </form>
  );
}

export default LoginForm;
