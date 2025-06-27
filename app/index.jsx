import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import CustomBottomBar from "../components/commom/CustomBottomBar";
import CustomTopBar from "../components/commom/CustomTopBar";
import Colors from "../components/constants/Colors";
import {
  bodyContext,
  NotesContext,
  titleContext,
} from "../components/contexts/NotesContext";
import NoteBlock from "../components/Focus/NoteBlock";
import { deleteAllItems, getItems } from "../services/NotesDB";

import NewNoteModal from "../components/Focus/modals/NewNoteModal";
import NewTaskListModal from "../components/Focus/modals/NewTaskListModal";

export default function Focus() {
  const [newModalVisible, setNewModalVisible] = useState(false);
  const [taskModalVisible, setTaskModalVisible] = useState(false);

  const { notes, setNotes } = useContext(NotesContext);
  const { titleS, setTitle } = useContext(titleContext);
  const { bodyS, setBody } = useContext(bodyContext);
  const [objective, setObjective] = useState("adicionar");

  useEffect(() => {
    getItems().then((notes) => setNotes(notes));
  }, []);

  return (
    <View style={styles.container}>
      <CustomTopBar name="Focus" goBack="none" />
      <View style={{ flex: 1, width: "85%", alignSelf: "center" }}>
        <FlatList
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          data={[...notes].reverse().sort((a, b) => b.isFavorite - a.isFavorite)}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginVertical: 15,
          }}
          renderItem={({ item }) => (
            <NoteBlock
              key={item.id}
              id={item.id}
              title={item.title}
              isFavorite={item.isFavorite}
              body={item.body}
              type={item.type}
            />
          )}
        />
      </View>

      <CustomBottomBar>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            setObjective("adicionar");
            setNewModalVisible(!newModalVisible);
          }}
        >
          <Icon name="plus-a" size={20} color={Colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            deleteAllItems().then(() =>
              getItems().then((notes) => setNotes(notes))
            );
          }}
        >
          <Icon name="trash" size={20} color={Colors.white} />
        </TouchableOpacity>
      </CustomBottomBar>

      <NewNoteModal
        newModalVisible={newModalVisible}
        setNewModalVisible={setNewModalVisible}
        setTaskModalVisible={setTaskModalVisible}
        setTitle={setTitle}
        setBody={setBody}
      />

      <NewTaskListModal
        taskModalVisible={taskModalVisible}
        setTaskModalVisible={setTaskModalVisible}
        setTitle={setTitle}
        setNotes={setNotes}
        titleS={titleS}
        setBody={setBody}
        objective={objective}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkSurface,
  },
  flatlist: {
    width: "100%",
    alignSelf: "center",
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.greenSecondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  modalCentered: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    flex: 1,
  },
  modalContent: {
    width: "50%",
    borderRadius: 10,
    height: 100,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  taskModalContent: {
    width: "70%",
    borderRadius: 10,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  option: {
    fontSize: 16,
    color: Colors.green,
  },
  optionButton: {
    width: "90%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: Colors.green,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: Colors.darkGreen,
    color: Colors.white,
    height: 40,
  },
});
