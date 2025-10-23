import { pageStyles } from '@/commomStyles/styles';
import { Colors } from '@/constants/Colors';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import CheckButton from '@/components/commom/CheckButton';

const ImageOption = ({ selectedOption, images }) => {
  const pickerStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(selectedOption.value === 'image' ? 1 : 0),
      display: selectedOption.value === 'image' ? 'flex' : 'none',
    };
  });

  return (
    <Animated.View style={[styles.container, pickerStyle]}>
      {images && (
        <>
          {images.map((img, index) => (
            <ResponsiveImage key={img.uri + index} uri={img.uri} />
          ))}
          <CheckButton onPress={() => {}}/>
        </>
      )}
    </Animated.View>
  );
};

export const ResponsiveImage = ({ uri }) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (uri) {
      Image.getSize(
        uri,
        (width, height) => setAspectRatio(width / height),
        (error) => console.error('Erro ao obter tamanho da imagem', error)
      );
    }
  }, [uri]);

  return (
    <View style={styles.imageBox}>
      <Image source={{ uri }} style={[styles.image, { aspectRatio }]} />
    </View>
  );
};

export default ImageOption;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    // height: 200,
    ...pageStyles.grid,
  },
  imageBox: {
    borderRadius: 15,
    backgroundColor: Colors.smoothDark,
    padding: 10,
    alignSelf: 'flex-start',
  },
  image: {
    width: '100%',
    maxHeight: 300,
    resizeMode: 'contain',
    borderRadius: 15,
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
  },
});
