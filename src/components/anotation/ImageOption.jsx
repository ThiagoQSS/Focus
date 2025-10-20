import { Colors } from '@/constants/Colors';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const ImageOption = ({ selectedOption, images, handleImage }) => {
  const pickerStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(selectedOption.value === 'image' ? 1 : 0),
      display: selectedOption.value === 'image' ? 'flex' : 'none',
    };
  });

  return (
    <Animated.View style={pickerStyle}>
      {images && (
        <>
          {images.map((img, index) => (
            <View style={styles.imgPickerBox} key={img.uri + index}>
              <Image source={{ uri: img.uri }} style={styles.image} />
            </View>
          ))}
          <TouchableOpacity onPress={handleImage}>
            <FontAwesome6 name='plus' size={24} color={Colors.primary} />
          </TouchableOpacity>
        </>
      )}
    </Animated.View>
  );
};

export default ImageOption;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    // height: 180,
    width: '100%',
    resizeMode: 'contain',
  },
  imgPickerBox: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.smoothDark,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
  },
});
