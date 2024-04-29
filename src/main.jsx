import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./components/App.jsx";
import "./index.css";
import "modern-normalize";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
