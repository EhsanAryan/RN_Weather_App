// import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Query from './Query';
import Coord from './Coord';
import AppButton from './AppButton';
import Result from './Result';
import TabsContainer from './TabsContainer';

const Weather = () => {
    const [tab, setTab] = useState(1); // 1: query, 2: lat, lon

    return (
        <View style={styles.box}>
            <TabsContainer
                tab={tab}
                setTab={setTab}
            />
            {tab === 1 ? (
                <Query />
            ) : (
                <Coord />
            )}
            <Result tab={tab} />
        </View>
    );
}

export default Weather;

const styles = StyleSheet.create({
    box: {
        // backgroundColor: "rgba(255, 255, 255, 0.65)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 20,
        overflow: "hidden",
        elevation: 15,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        marginBottom: 30,
    },
});