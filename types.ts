export type WeatherData = {
    main: {
        temp: number;
    };
    coord: {
        lat: number;
        lon: number;
    };
    name: string;
    weather: {
        main: string;
        description: string;
    }[];
}

export type WeatherStoreType = {
    loading: boolean;
    data: WeatherData | null;
    error: string | null;
    status: "cold" | "usual" | "warm" | "hot";
    setStatus: (status: WeatherStoreType["status"]) => void;
    getWeatherByNameHandler: (query: string) => Promise<void>;
    getWeatherByCoordHandler: (lat: number | string, lon: number | string) => Promise<void>;
}