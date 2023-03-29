export function emailValidator(email) {
  if (email === "") {
    return "It can't be empty";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Incorrect email format";
  }

  return "";
}
export function passwordValidator(password) {
  if (password === "") {
    return "It can't be empty";
  } else if (password.length < 8) {
    return "Password must be minimun 8 characters";
  }

  return "";
}
export function confirmPasswordValidator(password, confirmPassword) {
  if (password === "") {
    return "It can't be empty";
  } else if (password !== confirmPassword && password !== "") {
    return "The password confirmation doesn't match";
  }

  return "";
}
