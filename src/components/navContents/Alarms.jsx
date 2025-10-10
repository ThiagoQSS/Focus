import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { pageStyles, textStyles } from '@/commomStyles/styles';
import Icon from '@expo/vector-icons/FontAwesome6';
import MIcon from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';

const Alarms = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.littleAlarm}>
            <Icon name='clock' size={30} color={Colors.primary} />
          </View>
          <MIcon name='access-alarm' size={90} color={Colors.primary} />
        </View>
      </View>
      <View style={styles.titleBox}>
        <Text style={textStyles.subtitle}>Alarmes e Timers</Text>
      </View>
    </View>
  );
};

export default Alarms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  titleBox: {
    width: '100%',
  },
  littleAlarm: {
    alignSelf: 'flex-end',
  }
});
