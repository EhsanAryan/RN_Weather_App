import httpService from "./httpService"

const API_KEY = "c2fe170db43574838e6adf54622988b9";

export const getWeatherByNameService = (query: string) => {
    return httpService(`/weather?q=${query}&appid=${API_KEY}`, "get");
    // return httpService(`/weather?q=${query}&appid=${process.env.EXPO_PUBLIC_API_KEY}`, "get");
}

export const getWeatherByCoordService = (lat: number | string, lon: number | string) => {
    return httpService(`/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`, "get");
    // return httpService(`/weather?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_API_KEY}`, "get");
}


