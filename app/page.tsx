"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Input from "./component/Input";
import TopCity from "./component/Topcity";
import Time from "./component/Time";
import Temp from "./component/Temp";
import Forecast from "./component/Forecast";
import getFormattedData from "./services/weather.services";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon"; // Assuming you're using Luxon for date manipulation

declare global {
  interface Window {
    util: {
      open: (button: HTMLButtonElement) => void;
    };
  }
}

export default function Home() {
  // Router hook for navigation
  const router = useRouter();
  useEffect(() => {
    window.util = {
      open: (button: any) => {
        router.push("/Hourly");
      },
    };
  }, [router]);

  // For weather data state
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather]: any = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data: any = await getFormattedData({ ...query, units });
        setWeather(data);
        console.log(data); // Log the fetched data
      } catch (error: any) {
        setError(error);
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    return () => {
      // Cleanup logic if necessary
    };
  }, [query, units]);

  // Background image state
  const [backgroundImg, setBackgroundImg] = useState("");

  // Update background based on weather data and local time
  useEffect(() => {
    if (!weather) return;

    // Extract necessary data
    const { details, sunrise, sunset, dt, timezone } = weather;

    // Get local time based on timezone and current time (dt)
    const localTime = DateTime.fromSeconds(dt).setZone(`UTC+${timezone / 3600}`);
    console.log(localTime);
    

    const hour = localTime.hour;

    // Determine the time of day
    let timeOfDay = "";
    if (hour >= 5 && hour < 12) {
      timeOfDay = "morning";
    } else if (hour >= 12 && hour < 18) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }

    // Determine the background based on weather conditions and time of day
    const condition = details.toLowerCase();
    if (condition.includes("rain")) {
      setBackgroundImg(`../assets/${timeOfDay}_rain.jpg`);
    } else if (condition.includes("haze")) {
      setBackgroundImg(`../assets/${timeOfDay}_haze.jpg`);
    } else if (condition.includes("clear")) {
      setBackgroundImg(`../assets/${timeOfDay}_clear.jpg`);
    } else if (condition.includes("clouds")) {
      setBackgroundImg(`../assets/${timeOfDay}_cloudy.jpg`);
    } else {
      setBackgroundImg(`../assets/default.jpg`); // Fallback image
    }
  }, [weather]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          opacity: "0.8",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          height: "120vh",
          width: "100%",
        }}
      >
        <div className={styles.box}>
          <div className={styles.inputBox}>
            <h1 className={styles.title}>Weather App</h1>
            <br />
            <TopCity setQuery={setQuery} />
            <Input setQuery={setQuery} units={units} setUnits={setUnits} />
            {weather && (
              <div style={{ width: "100%" }}>
                <Time weather={weather} />
                <Temp weather={weather} />
                <Forecast title="daily forecast" items={weather.daily} />
              </div>
            )}
          </div>
          <div>
            <button
              onClick={(event) =>
                window.util.open(event.currentTarget as HTMLButtonElement)
              }
              style={{
                padding: "5px",
                backgroundColor: "transparent",
                marginTop: "5px",
                fontSize: "1rem",
                borderRadius: "15px",
              }}
            >
              Click Here For More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
