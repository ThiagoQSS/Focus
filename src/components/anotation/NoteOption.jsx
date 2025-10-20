import { Colors } from '@/constants/Colors';
import { StyleSheet, TextInput } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';

const NoteOption = ({selectedOption}) => {
  const editorStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(selectedOption.value === 'edit' ? 1 : 0),
      display: selectedOption.value === 'edit' ? 'flex' : 'none',
    };
  });

  return (
    <Animated.View style={[styles.editorBox, editorStyle]}>
      <TextInput
        style={styles.input}
        cursorColor={Colors.primary}
        verticalAlign='top'
        placeholder='Digite suas ideias...'
        multiline
        scrollEnabled={false}
        placeholderTextColor={Colors.offWhite}
      />
    </Animated.View>
  );
};

export default NoteOption;

const styles = StyleSheet.create({
  editorBox: {
    width: '100%',
    minHeight: 200,
    flex: 1,
    backgroundColor: Colors.smoothDark,
    borderRadius: 15,
    alignItems: 'flex-start',
    padding: 10,
    position: 'absolute',
  },
   input: {
    width: '100%',
    color: Colors.primary,
    alignSelf: 'flex-start',
    // backgroundColor: Colors.placeholder,
    verticalAlign: 'top',
    flex: 1,
  },
});
