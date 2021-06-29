import React from 'react';
import {StyleSheet, View} from 'react-native';
import InputMoney from '../../../components/Core/InputMoney';

const NewEntryInput = ({value, onChangeDebit, onChangeValue}) => {
  
  return (
    <View >
      <InputMoney 
        value={value} 
        onChangeDebit={onChangeDebit} 
        onChangeValue={onChangeValue}   
      />
    </View>
  );
};

export default NewEntryInput;

const styles = StyleSheet.create();
