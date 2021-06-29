import React from 'react'
import {StatusBar, StyleSheet, ActivityIndicator, View } from 'react-native'

import Colors from '../../styles/Colors';

const Loading = () => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.background} />
            <ActivityIndicator color={Colors.purple} size={60}/>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: "center",
        justifyContent: "center",

    }
})
