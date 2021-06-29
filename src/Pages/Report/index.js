import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, FlatList, TouchableOpacity} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';
import ActionFooter, { ActionPrimaryButton, ActionSecondaryButton } from '../../components/Core/ActionFooter';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import CategoryModal from '../../components/CategoryModal';


const Report = ({navigation}) => {
  const currentBalance = '2.102,45';
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false);
  const [relativeDays, setRelativeDays] = useState(7);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [category, setCategory] = useState({id: null, name: 'Todas Categorias'});

  const onClose = () =>{
    navigation.navigate('Main');
  };

  const scrollList = [
    { id: 1},
    { id: 2},
  ];

  const onRelativeDaysPress = item => {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  };

  const onCategoryPress = item => {
    setCategory(item);
    onCategoryClosePress();
  }

  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false);
  };

  const onCategoryClosePress = () => {
    setCategoryModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={"light-content"}
        backgroundColor={Colors.background}
      />
      <View >
        <BalanceLabel currentBalance={currentBalance} />
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton} onPress={() => setRelativeDaysModalVisible(true)} >
            <Text style={styles.filterButtonText}>Últimos {relativeDays} dias</Text>
            <Icon 
              name="keyboard-arrow-down"
              size={20}
              color={Colors.darkWhite}
            />
          </TouchableOpacity>
          <RelativeDaysModal 
            isVisible={relativeDaysModalVisible}
            onConfirm={onRelativeDaysPress}
            onCancel={onRelativeDaysClosePress}
          />
          <TouchableOpacity style={styles.filterButton} onPress={() => setCategoryModalVisible(true)  } >
            <Text style={styles.filterButtonText}>{category.name}</Text>
            <Icon
              name="keyboard-arrow-down"
              size={20}
              color={Colors.darkWhite}
            />
          </TouchableOpacity>
          <CategoryModal
            categoryType="all"
            isVisible={categoryModalVisible}
            onConfirm={onCategoryPress}
            onCancel={onCategoryClosePress}
          />
        </View>
      </View>
      <FlatList
        data={scrollList}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          (item.id === 1) ? <EntrySummary days={relativeDays} /> : <EntryList days={relativeDays} category={category}/>
          )
        }
      />
      <ActionFooter>
        <ActionPrimaryButton
          title={"Voltar"}
          onPress={onClose}
        />
      </ActionFooter>
    </View>
    
  );
};
export default Report;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  filterButton: {
    flexDirection: 'row',
    borderColor: Colors.darkWhite,
    borderWidth: 1,
    borderRadius: 150,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    marginTop: 10,
    alignContent: 'center',
  },
  filterButtonText: {
    color: Colors.darkWhite,
    
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  }
});
