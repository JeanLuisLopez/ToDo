import { useState } from "react";
import {
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
} from "../utils/formValidation";

export function useForm(initialState = {}, callBack) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = ({ form, name, validateAll }) => {
    let isValidate = true;

    const newErrors = structuredClone(errors);
    const { email, password, confirmPassword } = form;

    if (name === "email" || (validateAll && formData.hasOwnProperty("email"))) {
      const emailMessage = emailValidator(email);
      newErrors.email = emailMessage;
      if (emailMessage !== "") isValidate = false;
    }
    if (
      name === "password" ||
      (validateAll && formData.hasOwnProperty("password"))
    ) {
      const passwordMessage = passwordValidator(password);
      newErrors.password = passwordMessage;
      if (passwordMessage !== "") isValidate = false;
    }
    if (
      name === "confirmPassword" ||
      (validateAll && formData.hasOwnProperty("confirmPassword"))
    ) {
      const confirmPasswordMessage = confirmPasswordValidator(
        password,
        confirmPassword
      );
      newErrors.confirmPassword = confirmPasswordMessage;
      if (confirmPasswordMessage !== "") isValidate = false;
    }
    setErrors(newErrors);

    return { isValidate };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValidate } = validate({ form: formData, validateAll: true });
    if (isValidate) {
      callBack(formData);
    }
  };
  const handleBlur = (e) => {
    const name = e.target.name;
    validate({ form: formData, name });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (name === "password") {
      setErrors((prev) => ({ ...prev, password: "" }));
      setFormData((prev) => ({ ...prev, password: value }));
    }
    if (name === "confirmPassword") {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      setFormData((prev) => ({ ...prev, confirmPassword: value }));
    }
  };

  return { formData, handleChange, handleSubmit, errors, handleBlur };
}
