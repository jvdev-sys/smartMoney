import React from 'react';
import {FlatList} from 'react-native';
import Container from '../../components/Core/Container';
import {useNavigation} from '@react-navigation/native';

import useEntries from '../../hooks/useEntries';
import EntryListItem from './EntryListItem';

const EntryList = ({ days = 7, actionButtonText = false, category}) => {
  const [entries] = useEntries(days, category);
  const navigation = useNavigation();

  return (
    <Container 
      title="Últimos Lançamentos"
      nameIcon="insert-chart"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText={actionButtonText && "Ver mais"}
      onPressActionButton={() => navigation.navigate('Report')}
    >      
      <FlatList
        data={entries}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={entry => {
              navigation.navigate('NewEntry', { entry: entry })
            }}
            />
        )}
      /> 
    </Container>
  );
};

export default EntryList;


