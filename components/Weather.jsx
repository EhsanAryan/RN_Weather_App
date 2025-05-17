import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Query from './Query';
import Coord from './Coord';
import Result from './Result';
import TabsContainer from './TabsContainer';

const Weather = () => {
    const [tab, setTab] = useState(1); // 1: query, 2: coord

    return (
        <BlurView intensity={75} tint="light" style={styles.box}>
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
        </BlurView>
    );
}

export default Weather;

const styles = StyleSheet.create({
    box: {
        // backgroundColor: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(255, 255, 255, 0.65)",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 15,
        overflow: "hidden",
        // elevation: 15,
        // shadowColor: "black",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 10,
    },
});