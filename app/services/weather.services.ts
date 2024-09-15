// const API_KEY = "894d098373b7294f486a2d121a5f62a6";
// const BASE_URL = "https://api.openweathermap.org/data/2.5";

// const getWeatherData = (infoType: any, searchParams: any) => {
//   const url = new URL(BASE_URL + "/" + infoType);
//   url.search = new URLSearchParams({
//     ...searchParams,
//     appid: API_KEY,
//   }).toString();

//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => data);
// };
