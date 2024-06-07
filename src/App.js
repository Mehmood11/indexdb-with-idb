import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import InputComponent from "./components/InputComponent";
import DataComponent from "./components/DataComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputComponent />
        <DataComponent />
      </div>
    </Provider>
  );
}

export default App;
