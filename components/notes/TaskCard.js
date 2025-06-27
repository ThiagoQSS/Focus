import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Colors from "../constants/Colors";
import { editTaskDone } from "../../services/NotesDB";

const TaskCard = ({ title, id, done }) => {
  const [isDone, setIsDone] = useState(done);

  useEffect(() => {
    editTaskDone(id, isDone);
  }, [isDone]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            id % 2 === 0 ? Colors.darkerSurfaceAlt : Colors.darkerSurface,
        },
      ]}
      onLongPress={() => {}}
    >
      <TouchableOpacity
        style={styles.checkButtonContainer}
        onPress={() => {
          setIsDone(!isDone);
        }}
      >
        <Icon
          name={isDone ? "check" : "square-o"}
          size={20}
          color={Colors.green}
          style={styles.checkButton}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          {
            textDecorationLine: isDone ? "line-through" : "none",
            color: isDone ? Colors.textSecondary : Colors.textPrimary,
          },
        ]}
      >
        {title}
      </Text>
      <View style={{ flex: 1 }} />
      <Icon
        name="ellipsis-v"
        size={15}
        color={Colors.textSecondary}
        style={styles.rightIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.darkerSurface,
  },
  text: {
    color: Colors.textPrimary,
    paddingHorizontal: 10,
  },
  checkButtonContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  rightIcon: {
    paddingHorizontal: 20,
  },
});

export default TaskCard;
