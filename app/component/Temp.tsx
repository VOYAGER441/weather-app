import Image from "next/image";
import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const Temp = () => {
  return (
    <>
      <div
        style={{
          // Set the background color similar to the image
          color: "white",
          padding: "0px",
          borderRadius: "10px",
          width: "85%",
          margin: "0 auto", // Center the card
          textAlign: "center",
        }}
      >
        {/* Main weather condition */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Align vertically in center
            paddingTop: "6px",
            fontSize: "1.2rem",
            color: "",
          }}
        >
          <p style={{ paddingTop: "10px", margin: 0 }}>Cloudy</p>
        </div>

        {/* Weather details */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // Space evenly between elements
            alignItems: "center", // Align vertically in center
            paddingTop: "25px",
            padding: "20px",
            width: "100%",
          }}
        >
          {/* Left side: Weather icon */}
          <div style={{ padding: "0 10px" }}>
            <Image src="/assets/sun.jpg" alt="sun" width={50} height={50} />
          </div>

          {/* Middle: Temperature */}
          <div>
            <p style={{ fontSize: "3rem", margin: "0" }}>34°</p>
          </div>

          {/* Right side: Additional weather details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Align vertically
              alignItems: "flex-end", // Align right
              textAlign: "right",
            }}
          >
            {/* Real Feel */}
            <div
              style={{
                display: "flex",
                alignItems: "center", // Align icon and text
                fontSize: ".9rem",
              }}
            >
              <Unicons.UilTemperature size={18} />
              <span style={{ marginLeft: "5px" }}>Real feel: 36°</span>
            </div>

            {/* Humidity */}
            <div
              style={{
                display: "flex",
                alignItems: "center", // Align icon and text
                fontSize: ".9rem",
                marginTop: "5px",
                // marginLeft:"56px"
              }}
            >
              <Unicons.UilTear size={18} />
              <span style={{ marginLeft: "5px" }}>Humidity: 45%</span>
            </div>

            {/* Wind */}
            <div
              style={{
                display: "flex",
                alignItems: "center", // Align icon and text
                fontSize: ".9rem",
                marginTop: "5px",
              }}
            >
              <Unicons.UilWind size={18} />
              <span style={{ marginLeft: "5px" }}>Wind: 4 km/h</span>
            </div>
          </div>
        </div>

        {/*sun time  */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            justifyContent: "center",
            margin: "0 2px",
            color: "white",
            fontSize: ".7rem",
            padding: "3px 0",
            width:"100%",
            flexWrap:"wrap"
          }}
        >
          <Unicons.UilSun />
          <p style={{ fontSize: ".7rem",margin:"5px"}}>
            Rise:<span style={{fontWeight:"600"}}> 06:45 AM</span>
          </p>
          <p style={{marginTop:"3px", padding:"3px"}}>|</p>

          <Unicons.UilSunset />
          <p style={{ fontSize: ".7rem",margin:"5px"}}>
            Set:<span style={{fontWeight:"600"}}> 06:45 PM</span>
          </p>
          <p style={{marginTop:"3px", padding:"3px"}}>|</p>

          <Unicons.UilSun />
          <p style={{ fontSize: ".7rem",margin:"5px"}}>
            High: <span style={{fontWeight:"600"}}>45°</span>
          </p>
          <p style={{marginTop:"3px", padding:"3px"}}>|</p>

          <Unicons.UilSun />
          <p style={{ fontSize: ".7rem",margin:"5px"}}>
            Low:<span style={{fontWeight:"600"}}> 39°</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Temp;
