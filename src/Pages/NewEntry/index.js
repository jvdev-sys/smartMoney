import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, Alert} from 'react-native';
import ActionFooter, {ActionPrimaryButton, ActionSecondaryButton} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from '../NewEntry/NewEntryInput';
import Colors from '../../styles/Colors';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';
import useEntries from '../../hooks/useEntries';
import NewEntryAddresPicker from './NewEntryAddressPicker';
import NewEntryCameraPicker from './NewEntryCameraPicker';

const NewEntry = ({navigation, route}) => {
  const entry = route.params?.entry ?? {
    id: null,
    amount: 0,
    category: {id: null, name: 'Selecione'},
    address: "",
    latitude: null,
    longitude: null,
  };

  const [, addEntry, updateEntry, deleteEntry] = useEntries();
  const [debit, setDebit] = useState(entry.amount <= 0 ? true : false);
  const [amount, setAmount] = useState(`${entry.amount}`);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt ? entry.entryAt.toDate() : new Date());
  const [photo, setPhoto] = useState(entry.photo);
  const [address, setAddress] = useState(entry.address);
  const [latitude, setLatitude] = useState(entry.latitude);
  const [longitude, setLongitude] = useState(entry.longitude);
  
  const isValid = () => {
    if (parseFloat(amount) !== 0 && category !==  null) {
      return true;
    } else {
      Alert.alert('Complete os campos antes de continuar...');
      return false;
    }
  };

  const onSave = () => {
  
    const data = {
      id: entry.id,
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt,
      photo: photo,
      address: address,
      latitude: latitude,
      longitude: longitude,
      description: category.name,
    };
    if(entry.id){
      updateEntry(data);
    }else{
      addEntry(data);
    }
    
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  const onRemove = () => {
    deleteEntry(entry);
    onClose();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Colors.background}
      />
      <BalanceLabel />
      <View style={styles.formContainer}>
        <NewEntryInput 
          value={amount} 
          onChangeValue={setAmount}
          onChangeDebit={setDebit}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryCameraPicker photo={photo} onChangePhoto={setPhoto} />
          <NewEntryAddresPicker address={address} onChange={({latitude, longitude, address}) => {
             setLatitude(latitude);
             setLongitude(longitude);
             setAddress(address);
            
          }} />
          <NewEntryDeleteAction entry={entry} onOkPress={onRemove}/>
        </View>
       

      </View>
      <ActionFooter>
        <ActionPrimaryButton 
          title={entry.id ? "Atualizar" : "Salvar"} 
          onPress={() => {
            isValid() && onSave();
            }
          } 
        />
        <ActionSecondaryButton 
          title="Cancelar"
          onPress={onClose}
        />
      </ActionFooter>
    </View>
  );
};

export default NewEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,

  }
});
