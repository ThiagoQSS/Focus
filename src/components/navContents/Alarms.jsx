import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { pageStyles, textStyles } from '@/commomStyles/styles';

const Alarms = () => {
  return (
    <View style={styles.container}>
      <View>
        
      </View>
      <View style={styles.titleBox}>
        <Text style={textStyles.subtitle}>Alarms</Text>
      </View>
    </View>
  );
};

export default Alarms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'space-between',
    padding: 10,
  },
  titleBox: {
    width: '100%',
  }
});
