"use client";
import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import API_KEYs from "../utils/apiKey";

// Declare global variable type for TypeScript
declare global {
  interface Window {
    myWidgetParam: Array<{
      id: number;
      cityid: string;
      appid: string;
      units: string;
      containerid: string;
    }>;
  }
}

// Use HTTPS endpoints for secure requests
const AIR_POLLUTION_API_URL = "https://api.openweathermap.org/data/2.5/air_pollution";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = API_KEYs;

export default function Home() {
  const [backgroundImg, setBackgroundImg] = useState("");
  const [city, setCity] = useState("New York"); // Default city
  const [weatherData, setWeatherData] = useState<any>(null);
  const [airPollutionData, setAirPollutionData] = useState<any>(null);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setBackgroundImg("../assets/morning_cloudy.jpg");
    } else if (hour >= 12 && hour < 18) {
      setBackgroundImg("../assets/afternoon_clear.jpg");
    } else {
      setBackgroundImg("../assets/night_clear.jpg");
    }

    // Fetch weather and air pollution data
    const fetchData = async () => {
      try {
        // Fetch weather data
        const weatherResponse = await fetch(
          `${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        setWeatherData(weatherData);

        // Fetch air pollution data
        const { coord } = weatherData; // Get coordinates from weather data
        const airPollutionResponse = await fetch(
          `${AIR_POLLUTION_API_URL}?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`
        );
        const airPollutionData = await airPollutionResponse.json();
        setAirPollutionData(airPollutionData.list[0]);

        // Update widget params with new city data
        window.myWidgetParam = window.myWidgetParam || [];
        window.myWidgetParam.push({
          id: 11,
          cityid: weatherData.id, // Use city ID from weather data
          appid: API_KEY,
          units: "metric",
          containerid: "openweathermap-widget-11",
        });

        // Reinitialize the widget by removing and re-adding the script
        const existingWidgetScript = document.getElementById("weather-widget-script");
        if (existingWidgetScript) {
          existingWidgetScript.remove();
        }

        const script = document.createElement("script");
        script.id = "weather-widget-script";
        script.src =
          "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      const widgetScript = document.getElementById("weather-widget-script");
      if (widgetScript) {
        widgetScript.remove();
      }
    };
  }, [city]);

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCity((e.target as HTMLFormElement).city.value);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          opacity: "0.8",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100%",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div>
          <div className={styles.inputBox}>
            <h1 className={styles.title}>Weather App</h1>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                defaultValue={city}
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                Search
              </button>
            </form>
            <br />
            {/* OpenWeatherMap Widget */}
            <br />
            {/* Weather Data */}
            <p className={styles.title}>Current Weather</p>
            {weatherData && (
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  color: "white",
                }}
                >
                <h2>{weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp} °C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
              </div>
            )}
            <br />
            {/* Air Pollution Data Table */}
            <p className={styles.title}>Air Pollution Data</p>
            {airPollutionData && airPollutionData.components && (
              <table
              style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "20px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
                >
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        color: "white",
                      }}
                      >
                      Component
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        color: "white",
                      }}
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: "white" }}>
                  {Object.entries(airPollutionData.components).map(
                    ([key, value]: any) => (
                      <tr key={key}>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            color: "white",
                          }}
                          >
                          {key}
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            color: "white",
                          }}
                          >
                          {value}
                        </td>
                      </tr>
                    )
                  )}
                  <tr>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        color: "white",
                      }}
                    >
                      AQI
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        color: "white",
                      }}
                      >
                      {airPollutionData.main.aqi}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <hr/>
            <div 
            style={{marginTop:"20px"}}
            id="openweathermap-widget-11"></div>
          </div>
        </div>
      </div>
    </>
  );
}
