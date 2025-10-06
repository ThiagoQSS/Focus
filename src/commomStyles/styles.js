import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const pageStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  hpadding: {
    paddingHorizontal: 20,
  },
  grid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  FloatingBottomBar: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    zIndex: 2,
    paddingHorizontal: 30,
  },
});

export { pageStyles };
