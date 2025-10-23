import { Colors } from '@/constants/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

const CheckButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity style={styles.checkButton} onPress={onPress}>
      <FontAwesome6 name='check' size={24} color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default CheckButton;

const styles = StyleSheet.create({
  checkButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    // backgroundColor: Colors.smoothLight,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
