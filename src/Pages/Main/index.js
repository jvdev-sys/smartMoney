import React from 'react';
import {View, StyleSheet, FlatList, StatusBar } from 'react-native';

import { cleanUserAuth } from '../../services/Auth';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import Colors from '../../styles/Colors';
import ActionFooter, {  ActionSecondaryButton } from '../../components/Core/ActionFooter';


const Main = ({navigation}) => {
  const onNewEntryPress = () => {
    navigation.navigate('NewEntry');
  };

  const onLogoutPress = async () =>{
    await cleanUserAuth();
    navigation.reset({
      index: 0,
      key: null,
      routes: [{name: 'SignIn'}],
    });
  }

  const scrollList = [
    { id: 1 },
    { id: 2 },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Colors.purple}
      />
      <BalancePanel onNewEntryPress={onNewEntryPress} /> 
      <FlatList
        data={scrollList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          (item.id === 1) ? 
            <EntrySummary
              actionButtonText={true}
              onPressActionButton={() =>
                navigation.navigate('Report')}
            /> :
            <EntryList actionButtonText={true} />
        )
        }
      />
      <ActionFooter>
        <ActionSecondaryButton
          title={"LogOut"}
          onPress={onLogoutPress}
        />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;
