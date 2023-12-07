import { FormatCurrencyProps } from "./types";

export const formatCurrency = ({
  amount,
  currency = "USD",
}: FormatCurrencyProps) =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
