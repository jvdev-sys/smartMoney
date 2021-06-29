import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';

import useBalance from '../../hooks/useBalance';

const BalanceLabel = () => {
  const [balance] = useBalance();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradient style={styles.panel} colors={[Colors.purple, Colors.blue]}>
        <Text style={styles.value}>R$ {balance && balance.toFixed(2).replace('.',',')}</Text>
      </LinearGradient>
      
    </View>
  );
};

export default BalanceLabel;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  label: {
    fontSize: 12,
    color: Colors.white,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  panel:{
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    minWidth: 150,
    
  },
});
