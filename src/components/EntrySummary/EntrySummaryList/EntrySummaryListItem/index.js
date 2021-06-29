import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../../styles/Colors';
import Svg, {Circle} from 'react-native-svg';
import Currency from '../../../Currency';

const EntrySummaryListItem = ({entry}) => {
    const bulletColor = entry.category.color || Colors.white;
    return (
        <View style={styles.container}>
            <Svg width="20" height="22">
                <Circle
                    cx="10"
                    cy="10"
                    r={8}
                    stroke={Colors.background}
                    strokeWidth="0.5"
                    fill={bulletColor}
                />
            </Svg>
            <Text style={styles.name}>  {entry.category.name}</Text>
            <Text style={styles.amount}>
                <Currency value={entry.amount} />
            </Text>
        </View>
    )
}

export default EntrySummaryListItem;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    name: {
        fontSize: 12,
        color: Colors.white,
        marginTop: 2,
    },
    amount:{
        fontSize: 12,
        color: Colors.white,
        marginTop: 2,
        flex: 1,
        textAlign: 'right',
    },
    
});
