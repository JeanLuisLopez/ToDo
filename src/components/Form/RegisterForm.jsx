import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { supabase } from "../../supabase/client";
import ButtonWithRipple from "../ButtonWithRipple/ButtonWithRipple";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";

import styles from "./Form.module.css";

function RegisterForm() {
  const [errorLoggedUser, setErrorLoggedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const register = async ({ password, email }) => {
    try {
      setLoading(true);
      let { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(error);
      if (error) throw error;
    } catch (error) {
      setErrorLoggedUser(error);
    } finally {
      setLoading(false);
    }
  };

  const { handleChange, handleSubmit, errors, handleBlur } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    register
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <Input
        name={"confirmPassword"}
        type={"password"}
        placeholder={"Confirm password"}
        error={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <div>
        {errorLoggedUser && (
          <p className={styles.errorValidation}>Email is already registered</p>
        )}
        <ButtonWithRipple>{loading ? <Loader /> : "Login"}</ButtonWithRipple>
      </div>
    </form>
  );
}

export default RegisterForm;
