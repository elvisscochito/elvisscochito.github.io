import { createContext, useEffect, useState } from "react";

const CurrencyContext = createContext();

const CURRENCY_KEY = "preferred-currency";

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(
    () => localStorage.getItem(CURRENCY_KEY) || "USD"
  );

  useEffect(() => {
    localStorage.setItem(CURRENCY_KEY, currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
