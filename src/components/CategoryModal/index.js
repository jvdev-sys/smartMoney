import React  from 'react'
import { StyleSheet, Text, Modal, FlatList, TouchableOpacity, View } from 'react-native'
import Colors from '../../styles/Colors';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';
import useCategories from '../../hooks/useCategories';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
    const [debitCategories, creditCategories, allCategories] = useCategories();
    
    return (
        <View>
            <Modal animationType="slide" transparent={false} visible={isVisible}>
                <View style={styles.modal}>
                    <FlatList
                        data={categoryType === 'all'
                                ? allCategories 
                                : (categoryType === 'debit') 
                                ? debitCategories 
                                : creditCategories} 
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => onConfirm(item)}>
                                <Text style={[styles.modalItemText, { color: item.color }]}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                    <ActionFooter>
                        <ActionPrimaryButton title="Fechar" onPress={onCancel} />
                    </ActionFooter>
                </View>
            </Modal>
        </View>
    )
}

export default CategoryModal;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    modalItem: {
        flexDirection: 'row',
        backgroundColor: Colors.asphalt,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
    },
    modalItemText: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 22,
        color: Colors.white,
    },
})
