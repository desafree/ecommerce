import { Checkout } from "./views";
import {
  schemaCheckoutForm,
  defaultValuesForm,
  phoneRegex,
  calculateShipping,
  calculateVat,
  calculateGrandTotal,
  calculateTotals,
} from "./utils";
import {
  FormOptions,
  BillingDetails,
  ShippingDetails,
  PaymentsDetails,
  Summary,
  ItemsSummary,
  ItemPreviewSummary,
  Totals,
  TotalRow,
} from "./components";
import { CheckOutData, CheckoutItemRadio } from "./types";
export {
  Checkout,
  type CheckOutData,
  type CheckoutItemRadio,
  schemaCheckoutForm,
  defaultValuesForm,
  phoneRegex,
  FormOptions,
  BillingDetails,
  ShippingDetails,
  PaymentsDetails,
  Summary,
  ItemsSummary,
  ItemPreviewSummary,
  Totals,
  calculateShipping,
  calculateVat,
  calculateGrandTotal,
  TotalRow,
  calculateTotals,
};
