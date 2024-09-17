// import { DateTime } from "luxon";

// const API_KEY = "add4c14f84c1c44b01836b8e6e586ead";
// const BASE_URL = "https://api.openweathermap.org/data/2.5";

// // https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

// const getWeatherData = (infoType: string, searchParams: any | string[][] | Record<string, string> | URLSearchParams | undefined) => {
//   const url = new URL(BASE_URL + "/" + infoType);
//   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }).toString();

//   return fetch(url).then((res) => res.json());
// };

// const formatCurrentWeather = (data:any) => {
//   const {
//     coord: { lat, lon },
//     main: { temp, feels_like, temp_min, temp_max, humidity },
//     name,
//     dt,
//     sys: { country, sunrise, sunset },
//     weather,
//     wind: { speed },
//   } = data;

//   const { main: details, icon } = weather[0];

//   return {
//     lat,
//     lon,
//     temp,
//     feels_like,
//     temp_min,
//     temp_max,
//     humidity,
//     name,
//     dt,
//     country,
//     sunrise,
//     sunset,
//     details,
//     icon,
//     speed,
//   };
// };

// const formatForecastWeather = (data:any) => {
//   try {
    
//     let { timezone, daily, hourly } = data;
//     daily:[] = daily.slice(1, 6).map((d:any) => {
//       return {
//         title: formatToLocalTime(d.dt, timezone, "ccc"),
//         temp: d.temp.day,
//         icon: d.weather[0].icon,
//       };
//     });
    
//     hourly:[] = hourly.slice(1, 6).map((d:any) => {
//       return {
//         title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//         temp: d.temp,
//         icon: d.weather[0].icon,
//       };
//     });
    
//     return { timezone, daily, hourly };
//   }
//   catch (error) {
//       console.log(error);
      
//   };

// }


// const getFormattedWeatherData = async (searchParams:any) => {
//   const formattedCurrentWeather = await getWeatherData(
//     "weather",
//     searchParams
//   ).then(formatCurrentWeather);

//   const { lat, lon } = formattedCurrentWeather;

//   const formattedForecastWeather = await getWeatherData("onecall", {
//     lat,
//     lon,
//     exclude: "current,minutely,alerts",
//     units: searchParams.units,
//   }).then(formatForecastWeather);

//   return { ...formattedCurrentWeather, ...formattedForecastWeather };
// };

// const formatToLocalTime = (
//   secs:any,
//   zone:any,
//   format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// const iconUrlFromCode = (code:any) =>
//   `http://openweathermap.org/img/wn/${code}@2x.png`;

// export default getFormattedWeatherData;

// export { formatToLocalTime, iconUrlFromCode };


import { DateTime } from "luxon";
import API_KEYs from "../utils/apiKey";



const API_KEY =API_KEYs ; // Update with your correct API key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Function to fetch data from the API
const getWeatherData = (infoType: string, searchParams: any) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }).toString();

  return fetch(url).then((res) => res.json());
};

// Function to format current weather data
const formatCurrentWeather = (data: any) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

// Function to format forecast data for 5 days (grouped by daily average)
const formatForecastWeather = (data: any) => {
  try {
    const { list, city } = data;

    // Group data by day
    const dailyForecast = list.reduce((acc: any, forecast: any) => {
      const date = DateTime.fromSeconds(forecast.dt).toFormat('yyyy-MM-dd');
      if (!acc[date]) acc[date] = [];
      acc[date].push(forecast);
      return acc;
    }, {});

    // Extract daily averages (this is an example of how to process daily data)
    const formattedDaily = Object.keys(dailyForecast).map((date) => {
      const dayData = dailyForecast[date];
      const avgTemp = dayData.reduce((sum: number, d: any) => sum + d.main.temp, 0) / dayData.length;
      const icon = dayData[0].weather[0].icon; // Icon of the first forecast of the day
      const title = DateTime.fromISO(date).toFormat("ccc");

      return {
        title,
        temp: avgTemp,
        icon,
      };
    });

    return {
      timezone: city.timezone,
      daily: formattedDaily,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Fetch formatted weather data
const getFormattedWeatherData = async (searchParams: any) => {
  // Fetch current weather
  const formattedCurrentWeather = await getWeatherData("weather", searchParams)
    .then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  // Fetch forecast weather (5-day forecast in 3-hour intervals)
  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// Format Unix timestamp to local time
// const formatToLocalTime = (
//   secs: number,
//   zone: string,
//   format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatToLocalTime = (
  secs: number,
  offsetInSeconds: number, // Offset in seconds
  format = "cccc, dd LLL yyyy ' | Local time: 'hh:mm a"
) => {
  // Convert seconds to milliseconds and create a DateTime object
  const dateTime = DateTime.fromMillis(secs * 1000);
  
  // Calculate the offset in hours and minutes
  const offsetHours = Math.floor(offsetInSeconds / 3600);
  const offsetMinutes = (offsetInSeconds % 3600) / 60;
  
  // Apply the offset to the DateTime object
  const localDateTime = dateTime.setZone(`UTC${offsetHours >= 0 ? '+' : '-'}${Math.abs(offsetHours).toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`);

  return localDateTime.toFormat(format);
};

// Get icon URL from OpenWeatherMap
const iconUrlFromCode = (code: any) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };


