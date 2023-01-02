import * as yup from "yup";
import { FormData } from "../types";
import { phoneRegex } from "./phoneRegex";

export const schemaCheckoutForm: yup.SchemaOf<FormData> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .matches(phoneRegex, "Phone number is not valid")
    .required(),
  address: yup.string().required(),
  zip: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  city: yup.string().required(),
  country: yup.string().required(),
  "payment-method": yup.string().required(),
  "e-money-number": yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  "e-money-pin": yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
});
