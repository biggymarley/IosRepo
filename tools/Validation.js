import * as yup from "yup";

export const PersonalValidation = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(50)
    .min(3)
    .required(),
  lastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(50)
    .min(3)
    .required(),
  postcode: yup
    .string()
    .required()
    .test("len", "Must be exactly 5 characters", (val) => val?.length === 5),
  adress: yup.string().required().max(50).min(4),
  gender: yup.string().required(),
  phone: yup.string().required().min(8),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export const ToMaValidation = yup.object().shape({
  dfirstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(50)
    .min(3)
    .required("Please enter valid name"),
  dlastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(50)
    .min(3)
    .required("Please enter valid name"),
  dpostcode: yup
    .string()
    .required()
    .test("len", "Must be exactly 5 characters", (val) => val?.length === 5),
  dadress: yup.string().required().min(4),
  dgender: yup.string().required(),
  dphone: yup.string().required().min(8),
  mfirstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20)
    .min(3)
    .required("Please enter valid name"),
  mlastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20)
    .min(3)
    .required("Please enter valid name"),
  mpostcode: yup
    .string()
    .required()
    .test("len", "Must be exactly 5 characters", (val) => val?.length === 5),
  madress: yup.string().required().min(4),
  mgender: yup.string().required(),
  mphone: yup.string().required().min(8),
  numItems: yup.number().required(),
  type: yup.number().required(),
  payment: yup.number().required(),
});

export const ToDuValidation = yup.object().shape({
  dfirstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(50)
    .min(3)
    .required("Please enter valid name"),
  dlastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(50)
    .min(3)
    .required("Please enter valid name"),
  dpostcode: yup
    .string()
    .required()
    .test("len", "Must be exactly 5 characters", (val) => val?.length === 5),
  dadress: yup.string().required().min(4),
  dgender: yup.string().required(),
  dphone: yup.string().required().min(8),
  mfirstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20)
    .min(3)
    .required("Please enter valid name"),
  mlastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(20)
    .min(3)
    .required("Please enter valid name"),
  madress: yup.string().required().min(4),
  mgender: yup.string().required(),
  mphone: yup.string().required().min(8),
  numItems: yup.number().required(),
  type: yup.number().required(),
  payment: yup.number().required(),
  cin: yup.string().required().min(3),
});
