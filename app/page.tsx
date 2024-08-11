"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { title } from "process";
import Input from "./component/Input";



export default function Home() {
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
          <h1 className={styles.title}>Weather App</h1><br/>
          <Input/>
          </div>
          
        </div>
      </div>
     
    </>
  );
}
