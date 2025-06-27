import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Colors from "../../constants/Colors";

import {
  addToItems,
  editTask,
  getItems,
  addTask,
  getTasks,
  editTaskList,
} from "../../../services/NotesDB";


const dataBankOperation = (objective, id, titleS, setTasks, setNotes, taskTitle) => {
  switch (objective) {
    case "adicionar":
      addToItems(titleS, "", "taskList").then(() => 
        getItems()
          .then((notes) => setNotes(notes))
          .catch((err) =>
            console.log("error adding tasklist: ", err)
          )
      );
      break;
    case "editar":
      editTask(id, titleS).then(() => {
        getItems()
          .then((notes) => setTasks(notes))
          .catch((err) =>
            console.log("error editing task: ", err)
          );
      });
      break;
    case "novaTarefa":
      addTask(id, taskTitle)
        .then(() => {
          console.log("adding task...");
          getTasks(id)
            .then((tasks) => setTasks(tasks))
            .catch((err) => console.log("error adding task: ", err));
        })
        .catch((err) => console.log("error editing task: ", err));
      break;
    case "editarLista":
      editTaskList(id, titleS);
      break;
    default:
      console.log("Invalid objective:", objective);
      break;
  }
}


const NewTaskListModal = ({
  taskModalVisible,
  setTaskModalVisible,
  setTitle,
  setTasks,
  setNotes,
  titleS,
  objective = "adicionar",
  id,
}) => {

  const buttonName = objective !== "adicionar" ? "Salvar" : "Criar";
  const modalName = objective === "adicionar" ? "lista" : "tarefa";

  const [taskTitle, setTaskTitle] = useState("");

  return (
    <Modal animationType="fade" visible={taskModalVisible} transparent>
      <View
        style={styles.modalCentered}
      >
        <View style={styles.taskModalContent}>
          <View
            style={{
              width: "90%",
              alignItems: "center",
              alignSelf: "center",
              padding: 10,
            }}
          >
            <Text style={styles.title}>Nome da {modalName}</Text>
            <TextInput
              value={objective !== "novaTarefa" ? titleS : taskTitle}
              onChangeText={(text) =>
                objective !== "novaTarefa" ? setTitle(text) : setTaskTitle(text)
              }
              placeholder="Escolha um nome..."
              placeholderTextColor={Colors.textTerciary}
              borderBottomWidth={1}
              borderColor={Colors.darkGreen}
              style={styles.input}
            />
            <View
              style={{ flexDirection: "row", width: "100%", marginTop: 10 }}
            >
              <TouchableOpacity
                style={styles.createButton}
                onPress={() => {
                  if (taskTitle.trim() !== "" || titleS.trim() !== "") {
                    console.log("5 - the objetive is:", objective);
                    dataBankOperation(
                      objective,
                      id,
                      titleS,
                      setTasks,
                      setNotes,
                      taskTitle
                    );
                  }
                  setTaskModalVisible(false);
                }}
              >
                <Text style={styles.option}>{buttonName}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  createButton: {
    flex: 1,
    alignItems: "center",
    height: 30,
    marginTop: 10,
  },
});

export default NewTaskListModal;
