import { create } from "zustand";
import { getWeatherByCoordService, getWeatherByNameService } from "../services/weatherServices";
import { WeatherStoreType } from "../types";
import { AxiosError } from "axios";

const useStore = create<WeatherStoreType>((set) => ({
    loading: false,
    data: null,
    error: null,
    status: "usual",
    setStatus: (status) => set({ status }),
    getWeatherByNameHandler: async (query) => {
        set({ loading: true });
        try {
            const response = await getWeatherByNameService(query);
            if (response.status === 200) {
                set({ data: response.data, error: null });
            }
        } catch (err) {
            const error = err as AxiosError;
            const errorMessage = error.response?.status === 404 ?
                "شهر یا کشوری با نام وارد شده وجود ندارد." :
                "مشکلی رخ داده است، لطفاً چند لحظه دیگر مجدداً تلاش کنید.";
            set({
                data: null,
                error: errorMessage,
                status: "usual"
            });
        } finally {
            set({ loading: false });
        }
    },
    getWeatherByCoordHandler: async (lat, lon) => {
        set({ loading: true });
        try {
            const response = await getWeatherByCoordService(lat, lon);
            if (response.status === 200) {
                set({ data: response.data, error: null });
            }
        } catch (err) {
            const error = err as AxiosError;
            const errorMessage = error.response?.status === 404 ?
                "مختصات وارد شده نامعتبر می‌باشد." :
                "مشکلی رخ داده است، لطفاً چند لحظه دیگر مجدداً تلاش کنید.";
            set({
                data: null,
                error: errorMessage,
                status: "usual"
            });
        } finally {
            set({ loading: false });
        }
    }
}));

export default useStore;