import { Provider } from "react-redux";
import store from "./store/index";
import React from "react";
import Inventory from "./components/jobs/Inventory";
 // Use the HTML5 backend

function App() {
  return (
      <Provider store={store}>
      <React.Fragment>
      <Inventory />
      </React.Fragment>
    </Provider>
  );
}

export default App;
