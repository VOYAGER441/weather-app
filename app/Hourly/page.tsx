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

const AIR_POLLUTION_API_URL =
  "http://api.openweathermap.org/data/2.5/air_pollution";
const API_KEY = API_KEYs;

export default function Home() {
  const [backgroundImg, setBackgroundImg] = useState("");
  const [airPollutionData, setAirPollutionData] = useState<any>(null);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      console.log("morning");
      setBackgroundImg("../assets/morning.jpg"); // Adjusted path for Next.js
    } else if (hour >= 12 && hour < 18) {
      console.log("afternoon");
      setBackgroundImg("../assets/afternoon.jpg"); // Adjusted path for Next.js
    } else {
      console.log("night");
      setBackgroundImg("../assets/night.jpg"); // Adjusted path for Next.js
    }

    // Fetch air pollution data
    const fetchAirPollutionData = async () => {
      try {
        const response = await fetch(
          `${AIR_POLLUTION_API_URL}?lat=50&lon=50&appid=${API_KEY}`
        );
        const data = await response.json();
        setAirPollutionData(data.list[0]);
      } catch (error) {
        console.error("Error fetching air pollution data:", error);
      }
    };

    fetchAirPollutionData();

    // OpenWeatherMap widget integration
    const script = document.createElement("script");
    script.src =
      "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js";
    script.async = true;
    document.body.appendChild(script);

    const weatherWidgetScript = document.createElement("script");
    weatherWidgetScript.async = true;
    weatherWidgetScript.charset = "utf-8";
    weatherWidgetScript.src =
      "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    document.body.appendChild(weatherWidgetScript);

    // Ensure myWidgetParam is set before loading the widget script
    window.myWidgetParam = window.myWidgetParam || [];
    window.myWidgetParam.push({
      id: 11,
      cityid: "2643743",
      appid: "add4c14f84c1c44b01836b8e6e586ead",
      units: "metric",
      containerid: "openweathermap-widget-11",
    });

    // Clean up the script elements when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(weatherWidgetScript);
    };
  }, []);

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
            <br />
            {/* OpenWeatherMap Widget */}
            <div id="openweathermap-widget-11"></div>
            <br />
            {/* Air Pollution Data Table */}
            <p className={styles.title}>Air Pollution Data</p>
            {airPollutionData && (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "20px",
                  backgroundColor: "transparent",
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
                      }}
                    >
                      Component
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
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
                            color: "golden",
                          }}
                        >
                          {key}
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            color: "golden",
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
                        color: "golden",
                      }}
                    >
                      AQI
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        color: "golden",
                      }}
                    >
                      {airPollutionData.main.aqi}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
