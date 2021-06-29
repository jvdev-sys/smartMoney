import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PieChart} from 'react-native-svg-charts';



const EntrySummaryChart = ({data}) => {
  
  const pieData = data
                  .map(({category, amount}) => ({
                    key: category.id,
                    value: amount,
                    svg: {
                      fill: category.color,
                    },
                    arc: {
                      outerRadius:"100%",
                      innerRadius:"80%"
                    }
                  }));

  return (
      <View style={styles.container}>
        <PieChart 
          data={pieData}
          style={styles.chart}
          
        />
      </View>
  );
};

export default EntrySummaryChart;

const styles = StyleSheet.create({
  container: {},
  chart:{
    width: 100,
    height: 100,
    marginRight: 10, 
  },
});
