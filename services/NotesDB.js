import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("notes");

db.execSync(
  `
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        body TEXT,
        type TEXT NOT NULL,
        isFavorite INTEGER NOT NULL DEFAULT 0,
        password TEXT DEFAULT NULL
    );
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY NOT NULL,
        itemId INTEGER NOT NULL,
        title TEXT NOT NULL,
        done INTEGER NOT NULL DEFAULT 0
    );
    `
);

export const addToItems = async (title, body, type = "note") => {
  await db.runAsync(
    `INSERT INTO items (title, body, type) VALUES (?,?,?)`, [title, body, type]
  );
};

export const getItems = async () => {
  const result = await db.getAllAsync(`SELECT * FROM items;`);
  // console.log(result);
  return result;
};

export const editNote = async (id, title, body) => {
  await db.runAsync(
    `UPDATE items SET title = ?, body = ? WHERE id = ?;`, [title, body, id]
  );
};

export const editIsFavorite = async (id, isFavorite) => { 
  await db.runAsync(`UPDATE items SET isFavorite = ? WHERE id = ?;`, [isFavorite, id]);
}

export const deleteAllItems = async () => {
  await db.runAsync(`DELETE FROM items;`); // Delete all notes
  await db.runAsync(`DELETE FROM tasks;`); // Delete all tasks
};

export const addTask = async (itemId, title) => {
  await db.runAsync(
    `INSERT INTO tasks (itemId, title) VALUES (? , ?)`, [itemId, title]
  );
}

export const getTasks = async (id) => {
  const result = await db.getAllAsync(`SELECT * FROM tasks WHERE itemId = ?;`, [id]);
  return result;
}

export const editTaskDone = async (id, done) => {
  await db.runAsync(`UPDATE tasks SET done = ? WHERE id = ?;`, [done, id]);
};

export const editTaskList = async (id, title) => {
  await db.runAsync(
    `UPDATE items SET title = ? WHERE id = ?;`, [title, id]
  );
}

export const editPassword = async (id, password) => {
  await db.runAsync(
    `UPDATE items SET password = ? WHERE id = ?;`, [password, id]
  );
};

export const getPassword = async (id) => {
  const result = await db.getFirstAsync(`SELECT password FROM items WHERE id = ?;`, [id]);
  console.log("Result is: ", result);
  return result ? result.password : null;
};
