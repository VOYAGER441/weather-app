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
  const Weather = async () => {
    const data: any = await getFormattedData({ q: "london" });
    console.log(data);
    console.log("data");
  };

  Weather();


  // FOR HOURLY FORECAST
  const router = useRouter(); 
  useEffect(() => {
    window.util = {
      open: (button:any) => {
        
        router.push("/Hourly");
      },
    };
  }, [router]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          opacity: "0.8",
          backgroundSize: "cover",
            backgroundAttachment: "fixed",
          backgroundPosition: "center",
          height: "100%",
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
            {/* <Forecast title="hourly forecast" /> */}
            <Forecast title="daily forecast" />
          </div>
          <div>
            <button onClick={(event) =>
              window.util.open(event.currentTarget as HTMLButtonElement)
            }
            
            style={{padding:"5px",
              backgroundColor:"transparent",
              // borderBlockColor:"black",
              marginTop:'5px',
              fontSize:"1rem",
              borderRadius:"15px"
            }}
            
            >
            Click Here For Hourly Forecast
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

