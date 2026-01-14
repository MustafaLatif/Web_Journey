import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/e2779d823409e83785deed32/latest/${currency}.json`
        );
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error("Error fetching currency info:", error);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;