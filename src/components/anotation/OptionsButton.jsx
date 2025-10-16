import { textStyles } from '@/commomStyles/styles';
import { Colors } from '@/constants/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const ATouchable = Animated.createAnimatedComponent(TouchableOpacity);

const OptionsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useSharedValue(null);
  const position = useSharedValue(0);

  const handleTouch = () => {
    setIsOpen(!isOpen);
    isOpen ? (position.value = 0) : (position.value = 60);
    selectedOption.value = null;
  };

  const buttons = [{ icon: 'edit' }, { icon: 'image' }, { icon: 'list' }];

  const editorStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(selectedOption.value === 'edit' ? 1 : 0),
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}>
        {buttons.map((button, index) => (
          <Option
            key={index}
            icon={button.icon}
            onPress={button.onPress}
            position={position}
            index={index}
            selectedOption={selectedOption}
          />
        ))}

        <ATouchable style={styles.newButton} onPress={handleTouch}>
          <FontAwesome6
            name={isOpen ? 'minus' : 'plus'}
            size={20}
            color={Colors.primary}
          />
        </ATouchable>
      </View>

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
    </View>
  );
};

const Option = ({
  icon,
  position,
  index,
  selectedOption,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: withSpring(position.value * (index + 1)),
      opacity: withSpring(position.value === 0 ? 0 : 1),
      transform: [{ scale: withSpring(position.value === 0 ? 0.5 : 1) }],
      borderWidth: withSpring(selectedOption.value === icon ? 1 : 0),
    };
  });

  return (
    <ATouchable
      style={[styles.newButton, animatedStyle]}
      onPress={() => selectedOption.value = icon}
    >
      <FontAwesome6 name={icon} size={20} color={Colors.primary} />
    </ATouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    // backgroundColor: Colors.placeholder,
    alignSelf: 'stretch',
  },
  newButton: {
    position: 'absolute',
    borderRadius: 50,
    borderColor: Colors.primary,
    backgroundColor: Colors.smoothDark,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    aspectRatio: 1,
    width: 50,
  },
  buttonBox: {
    height: 50,
  },
  editorBox: {
    width: '100%',
    minHeight: 200,
    flex: 1,
    backgroundColor: Colors.smoothDark,
    borderRadius: 15,
    alignItems: 'flex-start',
    padding: 10,
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

export { OptionsButton };
