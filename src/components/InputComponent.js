import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData, getAllData } from "../indexDB/indexDB";
import { setData } from "../redux/slices/dataSlice";

const InputComponent = () => {
  const [input, setInputState] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      await addData({ text: input });
      const allData = await getAllData();
      dispatch(setData(allData));
      setInputState("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInputState(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default InputComponent;
