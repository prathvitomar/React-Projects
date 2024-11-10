import React from "react";

function WeatherCard({ data }) {
  if (
    !data ||
    !data.sys ||
    !data.weather ||
    !data.main ||
    !data.wind ||
    !data.clouds
  ) {
    return (
      <div style={loadingContainerStyles}>
        <h1 style={loadingMessageStyles}>
          Please Enter City to get weather data
        </h1>
      </div>
    );
  }

  const {
    name,
    sys: { country, sunrise, sunset },
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    clouds: { all: cloudiness },
  } = data;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  return (
    <div style={cardStyles}>
      <h2 style={titleStyle}>
        {name}, {country}
      </h2>
      <h4>{weather[0].main}</h4>
      <p style={tempStyle}>{Math.round(temp - 273.15)}°C</p>
      <p style={descStyle}>{weather[0].description}</p>
      <div style={detailsStyle}>
        <p>
          <strong>Feels like:</strong> {Math.round(feels_like - 273.15)}°C
        </p>
        <p>
          <strong>Min Temp:</strong> {Math.round(temp_min - 273.15)}°C
        </p>
        <p>
          <strong>Max Temp:</strong> {Math.round(temp_max - 273.15)}°C
        </p>
        <p>
          <strong>Pressure:</strong> {pressure} hPa
        </p>
        <p>
          <strong>Humidity:</strong> {humidity}%
        </p>
        <p>
          <strong>Cloudiness:</strong> {cloudiness}%
        </p>
        <p>
          <strong>Wind Speed:</strong> {speed} m/s
        </p>
        <p>
          <strong>Sunrise:</strong> {formatTime(sunrise)}
        </p>
        <p>
          <strong>Sunset:</strong> {formatTime(sunset)}
        </p>
      </div>
    </div>
  );
}

const cardStyles = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  width: "300px",
  margin: "20px auto",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  textAlign: "center",
  color: "#007bff",
};

const tempStyle = {
  fontSize: "2rem",
  color: "#ff5733",
  textAlign: "center",
};

const descStyle = {
  textAlign: "center",
  textTransform: "capitalize",
  color: "#333",
};

const detailsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginTop: "10px",
  color: "#555",
};

const loadingContainerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  color: "#333",
};

const loadingMessageStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "20px",
};

export default WeatherCard;
