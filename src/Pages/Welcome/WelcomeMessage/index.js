import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Colors from "../../../styles/Colors"

const WelcomeMessage = () => {
    return (
        <View>
            <Text style={styles.title}>Olá!</Text>
            <Text style={styles.message}>Para começar a usar o SmartMoney, você precisa inserir o seu saldo atual. 
                        Vamos lá?
            </Text>
        </View>
    )
}

export default WelcomeMessage;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: Colors.white,
        textAlign: "center",
        marginTop: 20,
    },
    message: {
        fontSize: 18,
        color: Colors.white,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 20
    },

})
