import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/slices/dataSlice";
import { getAllData } from "../indexDB/indexDB";

const DataComponent = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getAllData();
      dispatch(setData(allData));
    };
    fetchData();
  }, [dispatch]);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default DataComponent;
