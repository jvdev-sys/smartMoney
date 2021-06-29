import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../styles/Colors';

import Currency from '../../../components/Currency';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}> 
        <Currency value={currentBalance} />
      </Text>
    </View>
  );
};

export default BalancePanelLabel;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    zIndex: 1,
  },
  label: {fontSize: 15, color: Colors.white},
  value: {fontSize: 30, color: Colors.white},
});
