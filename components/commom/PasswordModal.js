import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { editPassword } from "../../services/NotesDB";

const { width, height } = Dimensions.get("window");

const PasswordModal = ({ isVisible, onClose, id, objective = "adicionar" }) => {
  const [newPassword, setNewPassword] = useState("");

  const modalTitle = objective === "adicionar" ? "Crie uma Senha" : "Digite a Senha";

  return (
    <Modal animationType="fade" visible={isVisible} transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.container}>
          <View style={{ flex: 2 }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{modalTitle}</Text>
            </View>
            <View style={styles.insideContainer}>
              <TextInput
                placeholder="Senha"
                placeholderTextColor={Colors.textSecondary}
                color={Colors.white}
                style={styles.textInput}
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
              />
              <View style={{ flex: 1 }} />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.error }]}
              onPress={() => onClose(false)}
            >
              <Icon name="close" size={20} color={Colors.darkGreen} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.green }]}
              onPress={() => {
                if (newPassword.trim()) {
                  editPassword(id, newPassword);
                onClose(false);
              }}}
            >
              <Icon name="check" size={20} color={Colors.darkGreen} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  container: {
    position: "absolute",
    width: "50%",
    borderRadius: 10,
    backgroundColor: Colors.surface,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  insideContainer: {
    width: "90%",
    alignSelf: "center",
  },
  textInput: {
    fontSize: 15,
    borderBottomColor: Colors.darkGreen,
    borderBottomWidth: 1,
    height: 30,
  },
  buttonsContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    height: 50,
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PasswordModal;
