import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import firestore from '@react-native-firebase/firestore';

import {getDefaultCategories} from '../../services/Categories';


const Firebase = () => {

    const firebaseCategories = async () => {
        const querySnapshot = await firestore()
            .collection('categories')
            .orderBy('order')
            .get();
        let firestoreCategories = querySnapshot.docs.map(documentSnapshot => {
            return { ...documentSnapshot.data(), id: documentSnapshot.id };
        });

        if (firestoreCategories.length === 0){
            const categories = getDefaultCategories();
            try {
                categories.forEach(async category => {
                    data = {
                        name: category.name,
                        isDebit: category.isDebit || false,
                        isCredit: category.isCredit || false,
                        isInit : category.isInit || false,
                        color: category.color || null,
                        order: category.order,
                    };
                    await firestore()
                        .collection('categories')
                        .add(data);
                });
                
            } catch (error) { console.error(error)}
        }
        
      //  let categories = getDefaultCategories();

        setQuerySnapshot(firestoreCategories);
    }
    const [querySnapshot, setQuerySnapshot] = useState([]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => firebaseCategories() }>
                <Text>Categorias</Text>
            </TouchableOpacity>
            <Text>{querySnapshot.length}</Text>
        </View>
    )
}

export default Firebase;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
    }
})
