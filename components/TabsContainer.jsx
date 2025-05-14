import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './AppButton';

const TabsContainer = ({ tab, setTab }) => {
    return (
        <View style={styles.tabsContainer}>
            <AppButton
                onPress={() => setTab(1)}
                bgColor={tab === 1 ? "black" : null}
                color={tab === 1 ? "white" : null}
                containerStyle={{
                    flex: 1
                }}
                textStyle={{
                    fontSize: 12,
                }}
            >
                نام
            </AppButton>
            <AppButton
                onPress={() => setTab(2)}
                bgColor={tab === 2 ? "black" : null}
                color={tab === 2 ? "white" : null}
                containerStyle={{
                    flex: 1
                }}
                textStyle={{
                    fontSize: 12,
                }}
            >
                مختصات جغرافیایی
            </AppButton>
        </View>
    );
}

export default TabsContainer;


const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        marginBottom: 30,
    },
});