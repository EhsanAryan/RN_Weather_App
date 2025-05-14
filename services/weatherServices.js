import httpService from "./httpService"

const API_KEY = "c2fe170db43574838e6adf54622988b9";

export const getWeatherByNameService = (query) => {
    return httpService(`/weather?q=${query}&appid=${API_KEY}`, "get");
    // return httpService(`/weather?q=${query}&appid=${process.env.EXPO_PUBLIC_API_KEY}`, "get");
}

export const getWeatherByCoordService = (lat, lon) => {
    return httpService(`/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`, "get");
    // return httpService(`/weather?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_API_KEY}`, "get");
}


