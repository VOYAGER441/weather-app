"use client";
import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import styles from './component.module.css';

const Input = ({ setQuery, units, setUnits }: any) => {
  const [city, setCity] = useState("");

  // Handle the search
  const handleSearch = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault(); // Prevent any default behavior (though not necessary here)
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setQuery({ lat, lon });
      }, (error) => {
        console.error("Error fetching location: ", error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  

  return (
    <>
      <form className={styles.Inputform} onSubmit={(e) => e.preventDefault()}>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="styled-input"
          placeholder="Enter location here..."
        />
        <div>
          {/* Trigger search on click */}
          <FaSearchLocation className={styles.icon} onClick={handleSearch} />
          <FaLocationDot className={styles.icon} 
          onClick={handleLocation}/>

          {/* Toggle between Celsius and Fahrenheit */}
          <button
            type="button"
            style={{ border: "none", background: "transparent" }}
            onClick={() => setUnits(units === "metric" ? "imperial" : "metric")}
          >
            {units === "metric" ? (
              <TbTemperatureCelsius size={20} style={{ marginLeft: "10px", cursor: "pointer" }} />
            ) : (
              <TbTemperatureFahrenheit size={20} style={{ cursor: "pointer" }} />
            )}
          </button>
        </div>
      </form>

      <style jsx>{`
        .styled-input {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          outline: none;
        }

        .styled-input:focus {
          border-color: #0070f3;
          box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
        }

        .styled-input::placeholder {
          color: #888;
        }

        .styled-input:hover {
          border-color: #005bb5;
        }

        @media (max-width: 600px) {
          .styled-input {
            width: 100%;
            font-size: 14px;
            padding: 10px 18px;
          }
        }
      `}</style>
    </>
  );
};

export default Input;
