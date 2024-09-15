import Image from "next/image";
import React from "react";

const Forecast = ({title}:any) => {
  return (
    <>
      
      <br></br>
      {/* daily forecast */}
      {/* for heading */}
      <div style={{ width: "90%" }}>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "start",
            marginTop: "6px",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: ".8rem",
              textTransform: "uppercase",
            }}
          >
            {title}
          </p>
        </div>
        <hr />

        {/* for chart */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          {/* 1st day */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: ".8rem",
                marginTop: "5px",
                marginLeft: "3px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              sun
            </p>
            <Image
              src="/assets/sun.jpg"
              alt="sun"
              width={30}
              height={30}
              style={{ margin: "8px 0px" }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: ".7rem",
                marginLeft: "9px",
              }}
            >
              22°
            </p>
          </div>

          {/* 2nd day */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: ".8rem",
                marginTop: "5px",
                marginLeft: "3px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              sun
            </p>
            <Image
              src="/assets/sun.jpg"
              alt="sun"
              width={30}
              height={30}
              style={{ margin: "8px 0px" }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: ".7rem",
                marginLeft: "9px",
              }}
            >
              22°
            </p>
          </div>
          {/* 3rd day */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: ".8rem",
                marginTop: "5px",
                marginLeft: "3px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              sun
            </p>
            <Image
              src="/assets/sun.jpg"
              alt="sun"
              width={30}
              height={30}
              style={{ margin: "8px 0px" }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: ".7rem",
                marginLeft: "9px",
              }}
            >
              22°
            </p>
          </div>
          {/* 4th day */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: ".8rem",
                marginTop: "5px",
                marginLeft: "3px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              sun
            </p>
            <Image
              src="/assets/sun.jpg"
              alt="sun"
              width={30}
              height={30}
              style={{ margin: "8px 0px" }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: ".7rem",
                marginLeft: "9px",
              }}
            >
              22°
            </p>
          </div>
          {/* 5th day */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: ".8rem",
                marginTop: "5px",
                marginLeft: "3px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              sun
            </p>
            <Image
              src="/assets/sun.jpg"
              alt="sun"
              width={30}
              height={30}
              style={{ margin: "8px 0px" }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: ".7rem",
                marginLeft: "9px",
              }}
            >
              22°
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forecast;
