import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { pageStyles } from '@/commomStyles/styles';
import { Colors } from '@/constants/Colors';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Anotation = () => {
  const width = useSharedValue(50);
  const height = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => ({
    width: withSpring(width.value),
    height: withSpring(height.value),
  }));

  const ATouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const [isOpen, setIsOpen] = useState(false);
  const handleTouch = () => {
    setIsOpen(!isOpen);
    width.value = width.value === 50 ? 350 : 50;
  };

  return (
    <View style={styles.container}>
      <ATouchable
        style={[styles.newButton, animatedStyle]}
        onPress={handleTouch}
      >
        {!isOpen ? (
          <FontAwesome6 name='plus' size={25} color={Colors.primary} />
        ) : (
          <>
            <FontAwesome6 name='minus' size={25} color={Colors.primary} />
            <FontAwesome6 name='minus' size={25} color={Colors.primary} />
            <FontAwesome6 name='minus' size={25} color={Colors.primary} />
          </>
        )}
      </ATouchable>
    </View>
  );
};

export default Anotation;

const styles = StyleSheet.create({
  container: {
    ...pageStyles.hpadding,
    flex: 1,
  },
  newButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.smoothDark,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    flexDirection: 'row',
  },
});
