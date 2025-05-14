import { create } from "zustand";
import { getWeatherByCoordService, getWeatherByNameService } from "../services/weatherServices";

const useStore = create((set) => ({
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
        } catch (error) {
            set({
                data: null,
                error: "شهر یا کشوری با نام وارد شده وجود ندارد.",
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
        } catch (error) {
            set({
                data: null,
                error: "مختصات وارد شده نامعتبر می‌باشد.",
                status: "usual"
            });
        } finally {
            set({ loading: false });
        }
    }
}));

export default useStore;