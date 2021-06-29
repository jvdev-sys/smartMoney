import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/Colors';
import useBalance from '../../hooks/useBalance';


const BalancePanel = ({onNewEntryPress}) => {
  const [balance] = useBalance();
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.purple, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelChart />
      </LinearGradient>

      <TouchableOpacity
        style={styles.button}
        onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default BalancePanel;

const styles = StyleSheet.create({
  panel: {
   
  },
  container: {},
  addButton: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.green,
    borderRadius: 50,
    width: 50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: -25,
    marginBottom: -25,
    marginRight: 10, 
    shadowColor: 'black',
    elevation: 15,
  },
});
