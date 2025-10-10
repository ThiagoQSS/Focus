import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pageStyles } from '@/commomStyles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Notes from '@/components/navContents/Notes';
import Alarms from '@/components/navContents/Alarms';
import { router } from 'expo-router';
import { AppRoutes } from './_layout';

const Home = () => {
  // Página dedicada à navegação entre as principais telas
  return (
    <SafeAreaView style={pageStyles.flex}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Focus</Text>
      </View>

      <View style={styles.container}>
        <NavButton retangle content={<Notes/>} onPress={() => router.push(AppRoutes.NOTES)}/>

        <View style={styles.row}>
          <NavButton square width='50%' flex content={<Alarms/>}/>
          <NavButton square width='50%' flex />
        </View>

        <View style={styles.flexRow}>
          <NavButton flex height='100%' />

          <View style={styles.flexColumn}>
            <NavButton height='50%' flex />
            <NavButton height='50%' flex />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const NavButton = ({
  width,
  height,
  square = false,
  retangle = false,
  column = false,
  flex = false,
  onPress,
  content: children,
}) => {
  let aspectRatio;
  if (square) aspectRatio = 1;
  else if (retangle) aspectRatio = 2;
  else if (column) aspectRatio = 0.5;
  else aspectRatio = 'auto';

  const boxstyle = {
    ...styles.boxContainer,
    aspectRatio: aspectRatio,
    width: width,
    height: height,
    flex: flex ? 1 : 0,
  };
  return (
    <TouchableOpacity style={boxstyle} onPress={onPress}>
      <LinearGradient
        colors={['#040404c2', '#0301245b']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      {children}
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    ...pageStyles.hpadding,
    marginBottom: 20,
    flex: 7,
    gap: 20,
    // backgroundColor: Colors.placeholder,
  },
  title: {
    color: Colors.white,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  boxContainer: {
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: Colors.primary,
    overflow: 'hidden',
    backgroundColor: Colors.placeholder,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    // backgroundColor: Colors.placeholder,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    flex: 1,
  },
  column: {
    justifyContent: 'space-between',
    gap: 20,
  },
  flexColumn: {
    justifyContent: 'space-between',
    gap: 20,
    flex: 1,
  },
  division: {
    gap: 20,
    flex: 1,
  },
});
