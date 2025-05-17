import React, { useEffect, useState } from 'react';
import useStore from '../store/store';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import NetInfo from '@react-native-community/netinfo';

const Result = ({ tab }) => {
    const [isConnected, setIsConnected] = useState(true);

    const data = useStore(state => state.data);
    const error = useStore(state => state.error);

    // useEffect(() => {
    //     // Run whenever network status changes (connect / disconnect / change the network)
    //     const unsubscribe = NetInfo.addEventListener(state => {
    //         setIsConnected(state.isConnected);
    //     });

    //     return () => {
    //         unsubscribe();
    //     }
    // }, []);

    useEffect(() => {
        // Run whenever error changes
        NetInfo.fetch().then(state => {
            setIsConnected(state.isConnected);
        });
    }, [error]);

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={[styles.boldText, styles.errorText]}>
                    {isConnected ?
                        error :
                        "لطفاً اتصال به اینترنت را بررسی کنید."}
                </Text>
            ) : data ? (
                <View style={styles.resultContainer}>
                    <View style={[styles.resultBox, styles.tempBox]}>
                        <Text style={[styles.boldText, styles.resultText]}>
                            {(data.main.temp - 273.15).toFixed(1)} °C
                        </Text>
                    </View>

                    <LinearGradient
                        style={[styles.resultBox, styles.weatherBox]}
                        colors={["#00CCFFD4", "#008080D4", "#00CCFFD4"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={[styles.boldText, styles.resultText]}>
                            {data.weather[0].main}
                        </Text>
                    </LinearGradient>

                    <View style={styles.resultBox}>
                        <Text style={styles.descriptionText}>
                            {data.weather[0].description}
                        </Text>
                    </View>
                </View>
            ) : (
                <Text style={styles.boldText}>
                    {tab === 1 ? "با وارد کردن نام شهر یا کشور، از وضعیت آب و هوای آن مطلع شوید." : "با وارد کردن مختصات جغرافیایی یک منطقه، از وضعیت آب و هوای آن مطلع شوید."}
                </Text>
            )}
        </View>
    );
}

export default Result;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 10,
    },
    boldText: {
        fontFamily: "Shabnam_Bold",
        textAlign: "center",
    },
    errorText: {
        fontSize: 16,
        color: "#cc301b"
    },
    resultContainer: {
        alignItems: "center",
        gap: 15,
    },
    resultBox: {
        width: "70%",
        minWidth: 200,
    },
    tempBox: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        paddingBottom: 2,
        marginBottom: 10,
    },
    resultText: {
        fontSize: 22,
    },
    weatherBox: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 15,
    },
    descriptionText: {
        fontFamily: "Shabnam",
        textAlign: "center",
    }
});