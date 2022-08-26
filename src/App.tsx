import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { MainLayout } from "components/layouts";
import { CardsPage, CardDetails } from "pages";
import GitHubProvider from "services/context/GitHubList";

function App() {
  return (
    <BrowserRouter basename="justforyou-FrontEnd">
      <GitHubProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<CardsPage />} />
            <Route path="/:owner/:repo" element={<CardDetails />} />
          </Route>
        </Routes>
      </GitHubProvider>
    </BrowserRouter>
  );
}

export default App;
