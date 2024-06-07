import { openDB } from "idb";

const DB_NAME = "redux_idb_app";
const STORE_NAME = "data";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

export const getAllData = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const addData = async (data) => {
  const db = await initDB();
  return db.add(STORE_NAME, data);
};
