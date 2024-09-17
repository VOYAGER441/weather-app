import React from "react";
import styles from "./component.module.css";
import { formatToLocalTime } from "../services/weather.services";

const Time = ({weather:{dt,timezone,name,country}}:any) => {
  return (
    <>
      <div>
        <div className={styles.Timezone}>
            <p className={styles.CityTime}>
            {formatToLocalTime(dt,timezone)}
            </p>
        </div>

        <div className={styles.PlaceName}>
            <p style={{fontSize: "1.5rem"}}>{`${name}, ${country}`}</p>
        </div>
      </div>
    </>
  );
};
export default Time;
