import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from 'constants/Colors';
import { pageStyles, textStyles } from '../../commomStyles/styles';

const Notes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardShadow} />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Organize seus pensamentos com facilidade.
        </Text>

        <View style={styles.imageBox}>
          <Image
            source={require('assets/nature.jpg')}
            style={styles.cardImage}
          />
          <Image
            source={require('assets/brainstorm-2.png')}
            style={styles.cardImage}
          />
        </View>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.notesTitle}>Anotações.</Text>
        <Text style={styles.notesTitle}>Imagens.</Text>
        <Text style={styles.notesTitle}>Tópicos.</Text>
        <Text style={styles.notesSubtitle}>
          Tudo que quiser guardar em um só lugar.
        </Text>
      </View>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    padding: 10,
  },
  card: {
    width: '50%',
    height: '100%',
    backgroundColor: Colors.smoothDark,
    borderRadius: 10,
    padding: 10,
    transform: [{ rotate: '15deg' }, { translateY: 30 }, { translateX: -10 }],
    elevation: 5,
  },
  cardShadow: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: Colors.smoothLight,
    borderRadius: 10,
    padding: 10,
    transform: [{ rotate: '15deg' }, { translateY: 32 }, { translateX: -10 }],
  },
  cardTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notesTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightSide: {
    width: '40%',
    height: '100%',
  },
  notesSubtitle: {
    color: Colors.primary,
    fontSize: 16,
    marginTop: 10,
  },
  cardImage: {
    width: 65,
    height: 65,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageBox: {
    ...pageStyles.flexRow,
    paddingRight: 10,
    gap: 0,
  }
});
