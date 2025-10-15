import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const pageStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  hpadding: {
    paddingHorizontal: 20,
  },
  vpadding: {
    paddingVertical: 20,
  },
  padding: {
    padding: 20,
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
});

const textStyles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallHeader: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export { pageStyles, textStyles };
