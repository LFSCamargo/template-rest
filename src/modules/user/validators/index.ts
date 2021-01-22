import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field"),
  password: Yup.string().required("Password is a required field"),
});

export const registerSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field"),
  password: Yup.string().required("Password is a required field"),
  birthDate: Yup.date().required("Birth date is a required field "),
  picture: Yup.string().notRequired(),
  name: Yup.string().required("Name is a required field"),
});
