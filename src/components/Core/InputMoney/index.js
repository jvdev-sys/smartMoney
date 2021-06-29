import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import Colors from '../../../styles/Colors';


const InputMoney = ({ 
    value, 
    startWithDebit = true, 
    onChangeDebit, 
    onChangeValue }) => {
    
    const setDefaultDebit = () =>{
        
        if(value === 0){
            return startWithDebit ? -1 : 1;
        }else{
            return value <= 0 ? -1 : 1;
        }
    }

    const setDefaultDebitPrefix = () => {
        if (value === 0){
            return startWithDebit ? "-" : "";
        }else{
            return value <= 0 ? '-' : '';
        }
    }

    const [debit, setDebit] = useState(setDefaultDebit());
    const [debitPrefix, setDebitPrefix] = useState(setDefaultDebitPrefix());
    const [valueDef, setValueDef] = useState(value !== null ? parseFloat(value).toFixed(2) : "");

    const onChangeDebitCredit = () => {
        setDebit(-debit);
        if (debit < 0) {
            setDebitPrefix('');
            onChangeDebit && onChangeDebit(false);
        } else {
            setDebitPrefix('-');
            onChangeDebit && onChangeDebit(true);
        }
        onChangeValue(value * -1);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.debitButton}
                onPress={onChangeDebitCredit}>
                <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
                <Text style={styles.debitButtonText}>R$</Text>
            </TouchableOpacity>
            <TextInputMask
                style={styles.input}
                type="money"
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: '',
                }}
                value={valueDef}
                includeRawValueInChangeText={true}
                onChangeText={(maskedValue, rawValue) => {
                    onChangeValue(rawValue * debit);
                }}
            />
        </View>
    );
}

export default InputMoney;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.asphalt,
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 15,
    },
    debitButton: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    debitButtonPrefix: {
        fontSize: 28,
        color: Colors.white,
        minWidth: 8,
    },
    debitButtonText: {
        fontSize: 28,
        color: Colors.white,
    },
    input: {
        flex: 1,
        fontSize: 28,
        color: Colors.white,
        textAlign: 'right',
        paddingLeft: 0,
        paddingRight: 20,
    },
})
