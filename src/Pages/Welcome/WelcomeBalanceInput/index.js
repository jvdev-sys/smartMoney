import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import InputMoney from '../../../components/Core/InputMoney';
import Colors from '../../../styles/Colors';

const WelcomeBalanceInput = ({value, onChangeValue}) => {
    return (
        <View>
            <Text style={styles.label}>Informe seu saldo</Text>
            <InputMoney 
                value={value} 
                onChangeValue={onChangeValue}
                startWithDebit={false}
            />
        </View>
    )
}

export default WelcomeBalanceInput;

const styles = StyleSheet.create({
    label: {
        color: Colors.white,
        fontSize: 28,
        textAlign: 'center',
    },
})
