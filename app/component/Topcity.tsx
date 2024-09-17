import React from "react";
import styles from './component.module.css';

const TopCity= ({ setQuery }: { setQuery: (query: { q: string }) => void })=>{
    const cities=[
        {
            id:1,
            title:'kolkata'
        },
        {
            id:2,
            title:'Mumbai'
        },
        {
            id:3,
            title:'Delhi'
        },
        {
            id:4,
            title:'Bangalore '
        },
        {
            id:5,
            title:'Hyderabad'
        },
    ]
    return(<>
    <div className={styles.cities}>
        {cities.map((city)=>(
            <button key={city.id} className={styles.cityButton}
            onClick={()=>setQuery({q:city.title})}
            > {city.title} </button>
        ))}

    </div>
    </>)
}


export default TopCity;
