import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Focus</Text>
      </SafeAreaView>

      <View>
        
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    color: Colors.primary,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
