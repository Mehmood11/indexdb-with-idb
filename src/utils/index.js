import { getAllData } from "../indexDB/indexDB";

// New function to get data for initial state
export const fetchInitialData = async () => {
  const data = await getAllData();
  return data;
};
