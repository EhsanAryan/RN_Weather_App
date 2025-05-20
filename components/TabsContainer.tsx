import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './AppButton';

type TabsContainerPropsType = {
    tab: number;
    setTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabsContainer = ({ tab, setTab }: TabsContainerPropsType) => {
    return (
        <View style={styles.tabsContainer}>
            <AppButton
                onPress={() => setTab(1)}
                bgColor={tab === 1 ? "black" : "transparent"}
                color={tab === 1 ? "white" : "black"}
                style={{
                    borderColor: "black",
                    borderWidth: tab === 1 ? 0 : 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
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
                bgColor={tab === 2 ? "black" : "transparent"}
                color={tab === 2 ? "white" : "black"}
                style={{
                    borderColor: "black",
                    borderWidth: tab === 2 ? 0 : 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
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