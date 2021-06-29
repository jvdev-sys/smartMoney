import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { getUserAuth } from './Auth';


import moment from '../vendors/moment';

export const getEntries = async (days, category) => {
  const userAuth = await getUserAuth();
  let querySnapshot;

  if(days > 0){
    const date = moment()
      .subtract(days, 'days')
      .toDate();
    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('entryAt')
      .startAt(date)
      .get()
  }else{
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .get()
  }
  
  let entries = querySnapshot.docs.map(documentSnapshot => {
    return { ...documentSnapshot.data(), id: documentSnapshot.id };
  });

  if(category && category.id){
    entries = entries.filter(entry => entry.category.id === category.id)
  }
  return entries;
};

export const addEntry = async entry => {
  const userAuth = await getUserAuth();
  let data = {};

  console.log('addEntry :: value: ', JSON.stringify(entry), userAuth);

  try {
    data = {
      amount: entry.amount,
      description: entry.category.name,
      entryAt: entry.entryAt || new Date(),
      latitude: entry.latitude || null,
      longitude: entry.longitude || null,
      address: entry.address || null,
      photo: entry.photo || null,
      isInit: entry.isInit || false,
      category: entry.category,
      userId: userAuth,
    };

    await firestore()
      .collection('entries')
      .add(data);
  } catch (error) {
    console.error(
      'addEntry :: error on save object: ',
      JSON.stringify(data),
      error,
    );
    Alert.alert('Erro', 'Houve um erro ao salvar este lançamento.');
  }
  return data;
};

export const updateEntry = async entry => {
  const userAuth = await getUserAuth();
  let data = {};

  console.log('updateEntry :: value: ', JSON.stringify(entry));

  try {
    data = {
      amount: entry.amount,
      description: entry.category.name,
      entryAt: entry.entryAt || new Date(),
      latitude: entry.latitude || null,
      longitude: entry.longitude || null,
      address: entry.address || null,
      photo: entry.photo || null,
      isInit: entry.isInit || false,
      category: entry.category,
      userId: userAuth,
    };
    await firestore()
      .collection('entries')
      .doc(entry.id)
      .update(data);
  } catch (error) {
    console.error(
      'updateEntry :: error on update object: ',
      JSON.stringify(data),
      error,
    );
    Alert.alert('Erro', 'Houve um erro ao atualizar este lançamento.');
  }
  return data;
}

export const deleteEntry = async entry => {
 
  try {
    await firestore()
      .collection('entries')
      .doc(entry.id)
      .delete();
  } catch (error) {
    console.error(
      'deleteEntry: error on delete object: ',
      JSON.stringify(this.data),
    );
    Alert.alert('Erro ao excluir o lançamento.');
  }
};
