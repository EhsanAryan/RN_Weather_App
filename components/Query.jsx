import React, { useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import AppButton from './AppButton';
import useStore from '../store/store';

const Query = () => {
    const [query, setQuery] = useState("");

    const getWeatherByNameHandler = useStore(state => state.getWeatherByNameHandler);
    const data = useStore(state => state.data);
    const loading = useStore(state => state.loading);

    const changeQueryHandler = (text) => {
        setQuery(text)
    }

    const submitHandler = async () => {
        if (query.trim().length === 0) {
            return Alert.alert("خطا", "لطفاً فیلد را پر کنید.", [
                { text: "متوجه شدم" }
            ], {
                cancelable: true,
            });
        }

        Keyboard.dismiss();
        await getWeatherByNameHandler(query);
        setQuery("");
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <TextInput
                value={query}
                onChangeText={changeQueryHandler}
                placeholder={data?.name ? data.name : "نام شهر یا کشور (به انگلیسی)"}
                placeholderTextColor="gray"
                style={styles.input}
                autoCorrect={false}
                onSubmitEditing={submitHandler}
            />
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="black" />
                    <Text style={styles.loadingText}>
                        لطفاً صبر کنید...
                    </Text>
                </View>
            ) : (
                <AppButton
                    bgColor={query.trim().length === 0 ? "gray" : "#44be2b"}
                    color="white"
                    containerStyle={{
                        width: 100,
                        marginHorizontal: "auto",
                        marginTop: 20,
                        opacity: query.trim().length === 0 ? 0.7 : 1,
                    }}
                    onPress={submitHandler}
                    disabled={query.trim().length === 0}
                >
                    ثبت
                </AppButton>
            )}
        </KeyboardAvoidingView>
    );
}

export default Query;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15,
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