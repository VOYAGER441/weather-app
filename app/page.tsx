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

// function App() {
//   const Weather = async () => {
//     const data: any = await getWeatherData("weather", { q: "kolkata" });
//     console.log(data);
//     console.log('data');
    
//   };
// }
// App();

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

  // api call


  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          opacity: "0.8",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className={styles.box}>
          <div className={styles.inputBox}>
            <h1 className={styles.title}>Weather App</h1>
            <br />
            <TopCity />
            <Input />
            <Time />
            <Temp />
            <Forecast title="hourly forecast" />
            <Forecast title="daily forecast" />
          </div>
        </div>
      </div>
    </>
  );
}
