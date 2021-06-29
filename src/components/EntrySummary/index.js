import React from 'react';
import {StyleSheet, View} from 'react-native'
import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';
import Container from '../Core/Container';
import useBalanceSumByCategory from '../../hooks/usBalanceSumByCategory';


const EntrySummary = ({ days = 7, actionButtonText = false, onPressActionButton, onClose}) => {

  const [balanceSum] = useBalanceSumByCategory(days);
  return (
    <Container
      title="Categorias"
      nameIcon="insert-chart"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText={actionButtonText && "Ver mais"}
      onPressActionButton={onPressActionButton}
      >
      <View style={styles.inner}>
        <EntrySummaryChart data={balanceSum}/>
        <EntrySummaryList onClose={onClose} data={balanceSum} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
})

export default EntrySummary;






