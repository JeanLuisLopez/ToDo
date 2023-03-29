import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import { TasksContextProvider } from "./context/TasksContext";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TasksContextProvider>
        <Router>
          <App />
        </Router>
      </TasksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
