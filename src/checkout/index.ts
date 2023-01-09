import { Checkout } from "./views";
import { CheckOutData, CheckoutItemRadio } from "./types";
import {
  schemaCheckoutForm,
  defaultValuesForm,
  phoneRegex,
  calculateTotals,
} from "./utils";
import { useGoHome } from "./hooks";
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
  OrderRecap,
  OrderRecapContainer,
  ItemsRecap,
  OrderDetailRecap,
  OrderTotalRecap,
  OrderDetailItem,
} from "./components";

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
  calculateTotals,
  TotalRow,
  OrderRecap,
  OrderRecapContainer,
  ItemsRecap,
  OrderDetailRecap,
  OrderTotalRecap,
  OrderDetailItem,
  useGoHome,
};
