import { pageStyles } from '@/commomStyles/styles';
import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

const Notes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <NoteBlock />
        <NoteBlock />
        <NoteBlock />
        <NoteBlock />
        <NoteBlock />
        <NoteBlock />
      </View>
    </View>
  );
};

const NoteBlock = () => {
  return (
    <View style={styles.note}>
      <LinearGradient style={StyleSheet.absoluteFill} colors={['#1e1a1ac2', '#0707185b']}/>
      <Text>Teste</Text>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    ...pageStyles.hpadding,
    flex: 1,
  },
  note: {
    width: "48%",
    height: 180,
    aspectRatio: 1,
    backgroundColor: Colors.smoothDark,
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden',
  },
  grid: {
    width: '100%',
    ...pageStyles.grid,
    // backgroundColor: Colors.placeholder,
  },
});
