import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Colors from '../../../styles/Colors';

const ActionFooter = ({children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                {children}
            </View>
            
        </View>
    )
}

export const ActionPrimaryButton = ({title, onPress}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}
export const ActionSecondaryButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ActionFooter;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingVertical: 10,
    },
    inner:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryButton: {
        borderRadius: 150,
        borderColor: Colors.green,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10
    },
    primaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.green,
    },
    secondaryButton: {
        borderRadius: 150,
        borderColor: Colors.orange,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
    },
    secondaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.orange,
    },
})
