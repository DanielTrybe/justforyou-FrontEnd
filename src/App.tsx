import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import GitHubProvider from "services/context/GitHubList";
import AppRoutes from "routes/routes";

function App() {
  return (
    <BrowserRouter basename="justforyou-FrontEnd">
      <GitHubProvider>
        <AppRoutes />
      </GitHubProvider>
    </BrowserRouter>
  );
}

export default App;
