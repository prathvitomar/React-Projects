import React, { useEffect, useState } from "react";

function MainCrypto() {
  const [currencyOption, setCurrencyOption] = useState([]);
  const [crypto, setCrypto] = useState(null);
  const [lastCryptoVal, setLastCryptoVal] = useState(null);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const delay = 5000;

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://www.freetestapi.com/api/v1/currencies?limit=20`
        );
        const res = await response.json();
        setCurrencyOption(res);
      } catch (error) {
        setError(error.message || "Failed to fetch currencies");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selected) return;

    async function fetchCrypto() {
      try {
        const response = await fetch(
          `https://api.frontendeval.com/fake/crypto/${selected}`
        );
        const res = await response.json();

        if (crypto && crypto.value !== res.value) {
          setLastCryptoVal(crypto.value);
        }
        setCrypto(res);
      } catch (error) {
        setError(error.message || "Failed to fetch crypto data");
      }
    }

    fetchCrypto(); 

    const interval = setInterval(fetchCrypto, delay);
    return () => clearInterval(interval);
  }, [selected]);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select a currency</option>
        {currencyOption.length > 0 &&
          currencyOption.map((option) => (
            <option key={option.id} value={option.code}>
              {option.code}
            </option>
          ))}
      </select>

      <div>
        {crypto && (
          <h1>
            {crypto.value} {selected}{" "}
            {lastCryptoVal !== null && (
              <span style={{ color: crypto.value > lastCryptoVal ? "green" : "red" }}>
                {crypto.value > lastCryptoVal ? "↑" : "↓"} {Math.abs(crypto.value - lastCryptoVal).toFixed(4)}
              </span>
            )}
          </h1>
        )}
      </div>
    </div>
  );
}

export default MainCrypto;
