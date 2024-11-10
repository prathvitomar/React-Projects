import React from "react";

function WeatherSearch({ city = "", onCityChange = () => {}, search = () => {} }) {
  return (
    <div style={containerStyles}>
      <div style={inputWrapperStyles}>
        <input
          type="text"
          placeholder="Please Enter City"
          value={city}
          onChange={onCityChange}
          style={inputStyles}
        />
      </div>
      <div style={buttonWrapperStyles}>
        <button
          disabled={city === ""}
          onClick={search}
          style={buttonStyles}
        >
          Search
        </button>
      </div>
    </div>
  );
}

const containerStyles = {
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  fontFamily: "Arial, sans-serif",
};

const inputWrapperStyles = {
  marginBottom: "15px",
};

const inputStyles = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.3s",
};

const buttonWrapperStyles = {
  textAlign: "center",
};

const buttonStyles = {
  padding: "10px 20px",
  fontSize: "16px",
  color: "#fff",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

buttonStyles.disabled = {
  ...buttonStyles,
  backgroundColor: "#ccc",
  cursor: "not-allowed",
};

export default WeatherSearch;
