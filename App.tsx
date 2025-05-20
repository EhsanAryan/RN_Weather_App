import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import Weather from './components/Weather';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from './store/store';
import { useEffect } from 'react';

export default function App() {
    const [loaded] = useFonts({
        "Shabnam": require("./assets/fonts/Shabnam/Shabnam.ttf"),
        "Shabnam_Bold": require("./assets/fonts/Shabnam/Shabnam-Bold.ttf"),
        "Shabnam_Light": require("./assets/fonts/Shabnam/Shabnam-Light.ttf"),
    });

    const data = useStore(state => state.data);
    const status = useStore(state => state.status);
    const setStatus = useStore(state => state.setStatus);

    useEffect(() => {
        if (!data) return;

        const temp = (data.main.temp) - 273.15;

        if (temp < 10) {
            setStatus("cold");
        } else if (temp <= 18) {
            setStatus("usual");
        } else if (temp <= 28) {
            setStatus("warm");
        } else {
            setStatus("hot");
        }
    }, [data])

    return (
        <>
            <StatusBar style="auto" />
            <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
                <ImageBackground
                    style={{ flex: 1 }}
                    source={status === "usual" ?
                        require(`./assets/pics/background/usual.jpg`) :
                        status === "hot" ?
                            require(`./assets/pics/background/hot.jpg`) :
                            status === "warm" ?
                                require(`./assets/pics/background/warm.jpg`) :
                                status === "cold" ?
                                    require(`./assets/pics/background/cold.jpg`) :
                                    null
                    }
                    resizeMode="cover"
                >
                    <ScrollView
                        style={styles.scrollView}
                        contentContainerStyle={styles.scrollViewContentContainer}
                        keyboardShouldPersistTaps="handled"
                    >
                        {loaded && <Weather />}
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        direction: "rtl",
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContentContainer: {
        paddingHorizontal: 25,
        paddingVertical: 50,
    },
});
