import httpService from "./httpService"

export const getWeatherByNameService = (query) => {
    return httpService(`/weather?q=${query}&appid=${process.env.EXPO_PUBLIC_API_KEY}`, "get");
}

export const getWeatherByCoordService = (lat, lon) => {
    return httpService(`/weather?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_API_KEY}`, "get");
}


