import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryDatePicker = ({value, onChange}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeValue = date => {
        onChange(date);
        onCancel();
    }

    const onCancel = () =>{
        setModalVisible(false);
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Icon name="today" size={30} color={Colors.white} />
            </TouchableOpacity>  
            <DateTimePickerModal
                mode="date" 
                datePickerModeAndroid ="calendar"
                titleIOS="Data de Vencimento "
                cancelTextIOS = "Cancelar"
                confirmTextIOS = "OK" 
                date={value}
                isVisible = {modalVisible}
                onConfirm = {onChangeValue}
                onCancel = {onCancel}
            />
        </View>
    )
};

export default NewEntryDatePicker;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.asphalt,
        width: 59,
        height: 59,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    }
})
