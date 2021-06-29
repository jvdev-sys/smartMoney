import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

import EntrySummaryListItem from '../EntrySummaryList/EntrySummaryListItem';

const EntrySummaryList = ({data}) => {
  return (
    
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={item => item.category.id}
        renderItem={({item}) => <EntrySummaryListItem entry={item} /> }      
      />
 
  );
};

export default EntrySummaryList;

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },    
});
