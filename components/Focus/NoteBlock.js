import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { editIsFavorite, getPassword } from "../../services/NotesDB";
import Colors from "../constants/Colors";
import { NotesContext } from "../contexts/NotesContext";

const { width, height } = Dimensions.get("window");

const NoteBlock = ({
  title = "Notes!",
  id = -1,
  body,
  type = "note",
  isFavorite,
}) => {
  const [star, setStar] = useState(isFavorite);
  const { notes, setNotes } = useContext(NotesContext);

  const [getPassword, setGetPassword] = useState(null);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        getPassword(id).then((password) => {
          if (password) {
            
          }
        });
        router.push({ pathname: "/notes", params: { title, id, body, type, isFavorite:star } });
      }}
    >
      <TouchableOpacity
        style={styles.starContainer}
        onPress={() => {
          const newStar = +!star;
          setStar(+!star);
          setNotes(
            notes.map((note) =>
              note.id === id ? { ...note, isFavorite: newStar } : note
            )
          );
          editIsFavorite(id, newStar);
        }}
      >
        <Icon name={star ? "star" : "star-o"} size={15} color={Colors.green} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {title}
        </Text>
      </View>
      {type !== "note" && (
        <View style={styles.checkContainer}>
          <Icon name="check" size={15} color={Colors.green} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.38,
    height: width * 0.38,
    backgroundColor: Colors.surface,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  text: {
    color: Colors.white,
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  starContainer: {
    width: "80%",
    height: 50,
    position: "absolute",
    top: 10,
    left: 10,
  },
  checkContainer: {
    width: "80%",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default NoteBlock;
