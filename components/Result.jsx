import React from 'react';
import useStore from '../store/store';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const Result = ({ tab }) => {

    const data = useStore(state => state.data);
    const error = useStore(state => state.error);

    return (
        <View style={styles.container}>
            {error ? (
                tab === 1 ? (
                    <Text style={[styles.boldText, styles.errorText]}>
                        شهر یا کشوری با نام وارد شده وجود ندارد.
                    </Text>
                ) : (
                    <Text style={[styles.boldText, styles.errorText]}>
                        مختصات وارد شده نامعتبر می‌باشد.
                    </Text>
                )
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
        fontSize: 16,
        textAlign: "center",
    }
});