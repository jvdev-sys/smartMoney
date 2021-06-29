import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = ({
  title,
  children,
  actionLabelText,
  actionButtonText,
  nameIcon,
  onPressActionButton,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              {nameIcon && (
                <Icon name={nameIcon} style={styles.actionButtonIcon} />
              )}
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: Colors.asphalt,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: 8,
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    color: Colors.white,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    fontSize: 14,
    color: Colors.white,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    marginTop: 2,
    marginRight: 3,
    fontSize: 14,
    color: Colors.white,
  },
  actionButtonText: {
    fontSize: 14,
    color: Colors.white,
  },
  containerList: {
    fontSize: 12,
    color: Colors.white,
  },
});
