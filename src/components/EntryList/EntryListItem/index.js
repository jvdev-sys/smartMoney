import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Svg, {Rect, Circle} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';
import Currency from '../../Currency';
import moment from '../../../vendors/moment';

// y = altura 0 = topo // 50 = base
// height = distancia da base - 0 = base / 50 = topo

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 30 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry.category.color || Colors.white;
  const time = moment(entry.entryAt.toDate()).calendar().split("").slice(0, 24).join("") + "...";
  const address = (entry.address) ? (entry.address).split("").slice(0,24).join("")+"..." : "";

  return (
    <TouchableOpacity onPress={() => onEntryPress && onEntryPress(entry)} >
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg width="30" height="50">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}
            <Circle
              cx="10"
              cy="25"
              r={8}
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>
          <View style={styles.details}>
            <Icon style={styles.entryAtIcon} name="access-time" />
            <Text style={styles.entryAtText}>{time} </Text>
              
            {(address !== "") && (
              <>
                <Icon style={styles.addressIcon} name="person-pin" size={12} />
                <Text style={styles.addressText}>{address}</Text>
              </>
            ) }
          </View>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>
            <Currency value={entry.amount} />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EntryListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    justifyContent: 'center',
    flex: 1,
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    marginTop: 2,
    marginRight: 2,
    color: Colors.darkWhite,
  },
  entryAtText: {
    fontSize: 12,
    color: Colors.darkWhite,
  },
  addressIcon: {
    marginRight: 2,
    marginTop: 2,
    marginLeft: 5,
    color: Colors.darkWhite,
  },
  addressText: {
    fontSize: 12,
    color: Colors.darkWhite,
  },
});
