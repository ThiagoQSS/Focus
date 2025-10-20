import { pageStyles, textStyles } from '@/commomStyles/styles';
import { OptionsButton } from '@/components/anotation/OptionsButton';
import { Colors } from '@/constants/Colors';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Anotation = () => {
  return (
    <View style={styles.container}>
      {/* <FlatList /> */}
      <OptionsButton />
    </View>
  );
};

export default Anotation;

const styles = StyleSheet.create({
  container: {
    ...pageStyles.hpadding,
    flex: 1,
    alignItems: 'flex-start',
    gap: 10,
  },
  newButton: {
    borderRadius: 50,
    backgroundColor: Colors.smoothDark,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    flexDirection: 'row',
    flexShrink: 1,
    padding: 10,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
