import React, { type ReactNode } from 'react';
import { GestureResponderEvent, Platform, Pressable, StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';

type AppButtonPropsType = {
    bgColor?: string;
    color?: string;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    onPress: (event?: GestureResponderEvent) => void;
    rippleColor?: string;
    disabled?: boolean;
    children: ReactNode;
}

const AppButton = ({
    bgColor = "transparent",
    color = "black",
    style,
    containerStyle,
    textStyle,
    onPress,
    rippleColor = "gray",
    disabled = false,
    children,
}: AppButtonPropsType) => {

    return (
        <View style={[styles.container, containerStyle]}>
            <Pressable
                style={({ pressed }) => [styles.button, style, {
                    backgroundColor: bgColor,
                }, (pressed && Platform.OS === "ios") && styles.pressed]}
                android_ripple={{ color: rippleColor }}
                onPress={onPress}
                disabled={disabled}
            >
                <Text style={[styles.text, textStyle, {
                    color: color,
                }]}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        overflow: "hidden",
    },
    button: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 15,
    },
    pressed: {
        opacity: 0.75
    },
    text: {
        fontFamily: "Shabnam",
        textAlign: "center",
    },
});
