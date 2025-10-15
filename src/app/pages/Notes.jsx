import { pageStyles, textStyles } from '@/commomStyles/styles';
import { Colors } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Notes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <NoteBlock title='Faculdade' isFavorite />
        <NoteBlock title='Projetos' isChecklist />
        <NoteBlock title='Receitas' />
        <NoteBlock title='Etc' isChecklist />
        <NoteBlock title='Entendeu já né' />
        <NoteBlock
          title='E se o título for muito grande tipo assim for bem bem grande mesmo tlg'
          isChecklist
        />
      </View>
    </View>
  );
};

const NoteBlock = ({
  title,
  isFavorite = false,
  isChecklist = false,
  anotationId,
}) => {
  const starState = isFavorite ? 'star' : 'star-o';

  return (
    <TouchableOpacity
      style={styles.note}
      onPress={() => router.push({
        pathname: 'pages/Anotation',
        params: { anotationId, title: title || 'Anotação' },
      })}
    >
      <TouchableOpacity style={styles.starBox}>
        <FontAwesome name={starState} color={Colors.primary} size={15} />
      </TouchableOpacity>

      <View style={styles.textBox}>
        <Text style={styles.noteTitle} ellipsizeMode='tail' numberOfLines={4}>
          {title}
        </Text>
      </View>
      {isChecklist && (
        <View style={styles.checkBox}>
          <FontAwesome name='check' color={Colors.primary} size={15} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    ...pageStyles.hpadding,
    flex: 1,
  },
  note: {
    width: '45%',
    height: 180,
    aspectRatio: 1,
    backgroundColor: Colors.smoothDark,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    elevation: 5,
  },
  grid: {
    width: '100%',
    ...pageStyles.grid,
    justifyContent: 'space-around',
    rowGap: 30,
    // backgroundColor: Colors.placeholder,
  },
  noteTitle: {
    ...textStyles.smallHeader,
    color: Colors.primary,
  },
  checkBox: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  textBox: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: 'pink',
  },
  starBox: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
