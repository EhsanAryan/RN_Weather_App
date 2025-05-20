import axios, { ResponseType } from "axios";

// URLS
export const base_api_url = "https://api.openweathermap.org/data/2.5";

// HTTP SERVICE (AXIOS)
const httpService = (
    url: string,
    method: string,
    data = null,
    contentType = "application/json",
    responseType: ResponseType = "json"
) => {
    return axios({
        url: base_api_url + url,
        method,
        data,
        responseType,
        headers: {
            "Content-Type": contentType,
        },
    });
}

export default httpService;