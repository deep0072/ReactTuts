import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  console.log(currency);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((resp) => resp.json())

      .then((resp) => setData(resp[currency]));
  }, [currency]);
 
  return data;
};

export default useCurrencyInfo;
