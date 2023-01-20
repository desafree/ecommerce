import * as yup from "yup";
import { CheckOutData } from "../types";
import { phoneRegex } from "./phoneRegex";

export const schemaCheckoutForm: yup.SchemaOf<CheckOutData> = yup
  .object()
  .shape({
    name: yup.string().required("errors.required"),
    email: yup.string().email("errors.email").required("errors.required"),
    phone: yup
      .string()
      .required("errors.required")
      .matches(phoneRegex, "errors.phone"),
    address: yup.string().required("errors.required"),
    zip: yup
      .string()
      .required("errors.required")
      .matches(/^[0-9]+$/, "errors.digit")
      .min(5, "errors.length")
      .max(5, "errors.length"),
    city: yup.string().required("errors.required"),
    country: yup.string().required("errors.required"),
    "payment-method": yup.string().required("errors.required"),
    "e-money-number": yup
      .string()
      .required("errors.required")
      .matches(/^[0-9]+$/, "errors.digit")
      .min(5, "errors.length")
      .max(5, "errors.length"),
    "e-money-pin": yup
      .string()
      .required("errors.required")
      .matches(/^[0-9]+$/, "errors.digit")
      .min(5, "errors.length")
      .max(5, "errors.length"),
  });
