import { Colors } from '@/constants/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import ImageOption from './ImageOption';
import NoteOption from './NoteOption';
import * as ImagePicker from 'expo-image-picker'; 

const ATouchable = Animated.createAnimatedComponent(Pressable);

const OptionsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useSharedValue(null);
  const position = useSharedValue(0);

  const handleTouch = () => {
    setIsOpen(!isOpen);
    isOpen ? (position.value = 0) : (position.value = 60);
    selectedOption.value = null;
  };

  const [image, setImage] = useState(null);

  const handleImage = async () => {
    console.log('Picking image...');
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      // allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: true,
    });
    // console.log(result);
    if (!result.canceled) {
      setImage(result.assets);
    }
  };

  const buttons = [
    { icon: 'edit' },
    { icon: 'image', onPress: handleImage },
    { icon: 'list' },
  ];

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

        <ATouchable style={styles.newButton} onPress={handleTouch} activeOpacity={1.0}>
          <FontAwesome6
            name={isOpen ? 'minus' : 'plus'}
            size={20}
            color={Colors.primary}
          />
        </ATouchable>
      </View>

      <View style={{ flex: 1, width: '100%' }}>
        <NoteOption selectedOption={selectedOption} />
        <ImageOption
          selectedOption={selectedOption}
          images={image}
          handleImage={handleImage}
        />
      </View>
    </View>
  );
};

const Option = ({
  icon,
  position,
  index,
  selectedOption,
  onPress = () => {},
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
      onPress={() => {
        if (selectedOption.value === icon) selectedOption.value = null;
        else {
          selectedOption.value = icon;
          onPress();
        }
      }}
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
});

export { OptionsButton };
