// import Image from "next/image";
// import React from "react";
// import { iconUrlFromCode } from "../services/weather.services";

// const Forecast = ({ title, items }: any) => {
//   console.log(items);
//   console.log('test1');
  
  
//   return (
//     <>
//       <br></br>
//       {/* daily forecast */}
//       {/* for heading */}
//       <div style={{ width: "90%" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyItems: "center",
//             justifyContent: "start",
//             marginTop: "6px",
//           }}
//         >
//           <p
//             style={{
//               color: "white",
//               fontSize: ".8rem",
//               textTransform: "uppercase",
//             }}
//           >
//             {title}
//           </p>
//         </div>
//         <hr />

//         {/* for chart */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyItems: "center",
//             justifyContent: "space-between",
//             color: "white",
//           }}
//         >
//           {items.map((item:any) => {
//             {
//               /* 1st day */
//             }
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <p
//                 style={{
//                   fontWeight: "500",
//                   fontSize: ".8rem",
//                   marginTop: "5px",
//                   marginLeft: "3px",
//                   textAlign: "center",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {item.title}
//               </p>
//               <Image
//                 src={iconUrlFromCode(item.icon)}
//                 alt="sun"
//                 width={30}
//                 height={30}
//                 style={{ margin: "8px 0px" }}
//               />
//               <p
//                 style={{
//                   fontWeight: "500",
//                   fontSize: ".7rem",
//                   marginLeft: "9px",
//                 }}
//               >
//                {`${item.temp}°`}
//               </p>
//             </div>;
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Forecast;
import Image from "next/image";
import React from "react";
import { iconUrlFromCode } from "../services/weather.services";

const Forecast = ({ title, items }: any) => {
  return (
    <>
      <br />
      {/* daily forecast */}
      {/* for heading */}
      <div style={{ width: "100%" }}>
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
          {items.slice(1).map((item: any, index: number) => (
            <div
              key={index+1} // Add a unique key for each mapped element
              style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                justifyContent: "center",
                alignItems: "center", // Add this to center items
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
                {item.title}
              </p>
              <Image
                src={iconUrlFromCode(item.icon)}
                alt="Weather Icon"
                width={50}
                height={50}
                style={{ margin: "8px 0px" }}
              />
              <p
                style={{
                  fontWeight: "500",
                  fontSize: ".7rem",
                  marginLeft: "9px",
                }}
              >
                {`${item.temp.toFixed()}°`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
