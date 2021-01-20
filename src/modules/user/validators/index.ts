import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field"),
  password: Yup.string().required(),
});

export const registerSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  birthDate: Yup.date().required(),
  picture: Yup.string().notRequired(),
  name: Yup.string().required(),
});
