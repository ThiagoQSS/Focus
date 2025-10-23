import { database } from "@/database";

const createNote = (type, title = null, body = null, image = null) => {
  database.get('notes').create((note) => {
    note.type = type;
    note.title = title;
    note.body = body;
    note.image = image;
  });
};

export { createNote };
