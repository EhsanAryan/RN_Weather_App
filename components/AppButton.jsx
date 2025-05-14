import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const AppButton = ({
    bgColor = "transparent",
    color,
    style,
    containerStyle,
    textStyle,
    onPress,
    rippleColor = "gray",
    disabled=false,
    children,
}) => {
    
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
                    color: color || "black",
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
    },
    pressed: {
        opacity: 0.75
    },
    text: {
        fontFamily: "Shabnam",
        textAlign: "center",
    },
});
