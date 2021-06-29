import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../styles/Colors';

import CategoryModal from '../../../components/CategoryModal';


const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCategoryPress = item => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        {category && (<Text style={styles.pickerButtonText}>{category.name}</Text>)}
      </TouchableOpacity>
      <CategoryModal 
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={modalVisible}
        onConfirm={onCategoryPress}
        onCancel={onClosePress}
      />

    </View>
  );
};

export default NewEntryCategoryPicker;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  pickerButton: {
    flexDirection: 'row',
    backgroundColor: Colors.asphalt,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 15,
    justifyContent: 'center',
  },
  pickerButtonText: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 28,
    color: Colors.white,
  },
  modalItem: {
    flexDirection: 'row',
    backgroundColor: Colors.asphalt,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  modalItemText: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 22,
    color: Colors.white,
  },
});
