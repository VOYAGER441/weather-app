import React from "react";

const Input = () => {
  return (
    <>
      <input className="styled-input" placeholder="Enter location here..." />
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
