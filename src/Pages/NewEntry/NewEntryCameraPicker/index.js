import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import NewEntryCameraPickerModal from './NewEntryCameraPickerModal';


const NewEntryCameraPicker = ({photo, onChangePhoto}) => {
   
    const [modalVisible, setModalVisible] = useState(false);

    const onChangePhotoPress = (newPhoto) => {
        onChangePhoto(newPhoto);
        onClosePress();
    }
    const onDeletePhotoPress = (newPhoto) => {
        onChangePhoto(null);
        onClosePress();
    }
    const onClosePress = (newPhoto) => {
        setModalVisible(false);
    }

    return (  
        <View>
            <TouchableOpacity style={[styles.button, (photo) ? styles.buttonActivated : ""]} onPress={() => setModalVisible(true)}>
                <Icon name="photo-camera" size={30} color={Colors.white} />
            </TouchableOpacity>
            <NewEntryCameraPickerModal 
                isVisible={modalVisible}
                onChangePhoto={onChangePhotoPress}
                photo={photo}
                onDelete={onDeletePhotoPress}
                onCloseCamera={onClosePress}
            />
        </View>   
    )
}

export default NewEntryCameraPicker

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.asphalt,
        width: 59,
        height: 59,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 3,
    },
    buttonActivated: {
        backgroundColor: Colors.blue,
    }
})
