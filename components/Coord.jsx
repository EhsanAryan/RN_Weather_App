import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import AppButton from './AppButton';
import useStore from '../store/store';

const Coord = () => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");

    const getWeatherByCoordHandler = useStore(state => state.getWeatherByCoordHandler);
    const data = useStore(state => state.data);
    const loading = useStore(state => state.loading);

    const latInputRef = useRef(null);
    const lonInputRef = useRef(null);

    const changeLatHandler = (text) => {
        setLat(text);
    }

    const changeLonHandler = (text) => {
        setLon(text);
    }

    const latSubmitHandler = () => {
        if (lat.trim() && lon.trim()) {
            submitHandler();
        } else {
            lonInputRef?.current?.focus();
        }
    }

    const lonSubmitHandler = () => {
        if (lat.trim() && lon.trim()) {
            submitHandler();
        } else {
            latInputRef?.current?.focus();
        }
    }

    const submitHandler = async () => {
        const latNumber = Number(lat);
        const lonNumber = Number(lon);
        if (lat.trim().length === 0 || lon.trim().length === 0) {
            return Alert.alert("خطا", "لطفاً فیلدها را پر کنید.", [
                { text: "متوجه شدم" }
            ], {
                cancelable: true,
            });
        } else if (Number.isNaN(latNumber) || Number.isNaN(lonNumber)) {
            return Alert.alert("خطا", "لطفا در فیلدها، فقط عدد وارد کنید.", [
                { text: "متوجه شدم" }
            ], {
                cancelable: true,
            });
        } else if (latNumber > 90 || latNumber < -90) {
            return Alert.alert("خطا", "طول جغرافیایی باید یک عدد از 90 تا -90 باشد.", [
                { text: "متوجه شدم" }
            ], {
                cancelable: true,
            });
        } else if (lonNumber > 180 || lonNumber < -180) {
            return Alert.alert("خطا", "عرض جغرافیایی باید یک عدد از 180 تا -180 باشد.", [
                { text: "متوجه شدم" }
            ], {
                cancelable: true,
            });
        }

        Keyboard.dismiss();
        await getWeatherByCoordHandler(lat, lon);
        setLat("");
        setLon("");
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.inputsContainer}>
                <TextInput
                    value={lat}
                    onChangeText={changeLatHandler}
                    placeholder={data?.coord ? String(data.coord.lat) : "طول جغرافیایی"}
                    placeholderTextColor="gray"
                    style={styles.input}
                    autoCorrect={false}
                    keyboardType="numeric"
                    ref={latInputRef}
                    onSubmitEditing={latSubmitHandler}
                />
                <TextInput
                    value={lon}
                    onChangeText={changeLonHandler}
                    placeholder={data?.coord ? String(data.coord.lon) : "عرض جغرافیایی"}
                    placeholderTextColor="gray"
                    style={styles.input}
                    autoCorrect={false}
                    keyboardType="numeric"
                    ref={lonInputRef}
                    onSubmitEditing={lonSubmitHandler}
                />
            </View>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="black" />
                    <Text style={styles.loadingText}>
                        لطفاً صبر کنید...
                    </Text>
                </View>
            ) : (
                <AppButton
                    bgColor={(lat.trim().length === 0 || lon.trim().length === 0) ? "gray" : "#44be2b"}
                    color="white"
                    containerStyle={{
                        width: 100,
                        marginHorizontal: "auto",
                        marginTop: 20,
                        opacity: (lat.trim().length === 0 || lon.trim().length === 0) ? 0.7 : 1,
                    }}
                    onPress={submitHandler}
                    disabled={(lat.trim().length === 0 || lon.trim().length === 0)}
                >
                    ثبت
                </AppButton>
            )}
        </KeyboardAvoidingView>
    );
}

export default Coord;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15,
    },
    inputsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 15,
    },
    input: {
        flex: 1,
        fontFamily: "Shabnam_Bold",
        fontSize: 16,
        textAlign: "center",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        direction: "ltr",
    },
    loadingContainer: {
        gap: 5,
        alignItems: "center",
        marginTop: 30,
    },
    loadingText: {
        fontFamily: "Shabnam_Light",
    }
});