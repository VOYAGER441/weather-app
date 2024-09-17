"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { title } from "process";
import Input from "./component/Input";
import TopCity from "./component/Topcity";
import Time from "./component/Time";
import Temp from "./component/Temp";
import Forecast from "./component/Forecast";
import getFormattedData from "./services/weather.services";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    util: {
      open: (button: HTMLButtonElement) => void;
    };
  }
}

export default function Home() {
  // background staff
  const [backgroundImg, setBackgroundImg] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      console.log("morning");

      setBackgroundImg("../assets/morning.jpg");
    } else if (hour >= 12 && hour < 18) {
      console.log("afternoon");

      setBackgroundImg("../assets/afternoon.jpg");
    } else {
      console.log("night");

      setBackgroundImg("../assets/night.jpg");
    }
  }, []);

  // api call for test

  // FOR HOURLY FORECAST
  const router = useRouter();
  useEffect(() => {
    window.util = {
      open: (button: any) => {
        router.push("/Hourly");
      },
    };
  }, [router]);

  // for data
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather]: any = useState(null);
  const [loading, setLoading] = useState(true); // Optional: Track loading state
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     const data: any = await getFormattedData({ ...query, units }).then(
  //       (data: any) => {
  //         setWeather(data);
  //       }
  //     );
  //     console.log(data);
  //     console.log("data");
  //   };

  //   fetchWeather();
  // }, [query, units]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true); // Start loading
        const data: any = await getFormattedData({ ...query, units });
        setWeather(data);
        console.log(data); // Log the fetched data
      } catch (error: any) {
        setError(error); // Handle errors
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchWeather();

    // Optionally handle cleanup if needed
    return () => {
      // Cleanup logic if necessary
    };
  }, [query, units]);

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
                // borderBlockColor:"black",
                marginTop: "5px",
                fontSize: "1rem",
                borderRadius: "15px",
              }}
            >
              Click Here For Air Pollution Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
