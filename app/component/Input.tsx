"use client";
import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import styles from './component.module.css';

const Input = () => {
  return (
    <>
      <form className={styles.Inputform}>
        <input type="text" className="styled-input" placeholder="Enter location here..." />
        <div>
        <FaSearchLocation className={styles.icon} />
        <FaLocationDot className={styles.icon} />
        <button style={{border:"none",background:"transparent"}}>
        <TbTemperatureCelsius size={20} style={{ marginLeft: "10px" }} />
        </button>/
        <button style={{border:"none",background:"transparent"}}>
        <TbTemperatureFahrenheit  size={20} />
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
          {/* margin-right:5px; */}
        }

        .styled-input:focus {
          border-color: #0070f3; /* Accent color */
          box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
        }

        .styled-input::placeholder {
          color: #888;
        }

        .styled-input:hover {
          border-color: #005bb5;
        }

        /* Responsive Design */
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
