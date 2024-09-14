import Image from "next/image";
import React from "react";

const Forecast = () => {
  return (
    <>
      <div style={{width:"90%"}}>
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
            hourly forecast
          </p>
        </div>
        <hr />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ fontWeight: "500", fontSize: ".7rem", marginTop: "5px" }}
            >
              04:30 PM
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
                marginLeft: "7px",
              }}
            >
              22°
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ fontWeight: "500", fontSize: ".7rem", marginTop: "5px" }}
            >
              04:30 PM
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
                marginLeft: "7px",
              }}
            >
              22°
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ fontWeight: "500", fontSize: ".7rem", marginTop: "5px" }}
            >
              04:30 PM
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
                marginLeft: "7px",
              }}
            >
              22°
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ fontWeight: "500", fontSize: ".7rem", marginTop: "5px" }}
            >
              04:30 PM
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
                marginLeft: "7px",
              }}
            >
              22°
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ fontWeight: "500", fontSize: ".7rem", marginTop: "5px" }}
            >
              04:30 PM
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
                marginLeft: "7px",
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
