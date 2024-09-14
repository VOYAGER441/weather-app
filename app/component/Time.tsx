import React from "react";
import styles from "./component.module.css";


const Time = () => {
  return (
    <>
      <div>
        <div className={styles.Timezone}>
            <p className={styles.CityTime}>
                Tuesday,31 May 2024| Local time: 12:46 PM
            </p>
        </div>

        <div className={styles.PlaceName}>
            <p style={{fontSize: "1.5rem"}}>Nalikul,IN</p>
        </div>
      </div>
    </>
  );
};
export default Time;
