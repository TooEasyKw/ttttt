import React, { useState } from "react";
import "./App.css";
import AppContext from "./context/AppContext";
import { LanguageProvider } from "./context/LanguageProvider";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Login from "./pages/unAuth/Login";
import Register from "./pages/unAuth/Register";
import Home from "./pages/unAuth/Home";
import Main from "./pages/Main";
import HomeOrg from "./pages/Auth/HomeOrg";
import Events from "./pages/Auth/Events";
import Volunteers from "./pages/Auth/Volunteers";
import CreateEvent from "./pages/Auth/CreateEvent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [app, setApp] = useState({
    theme: "Light",
    user: false,
  });

  return (
    <LanguageProvider>
      <AppContext.Provider value={{ app, setApp }}>
        {!app.user ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        ) : (
          <Main>
            <Routes>
              <Route path="/" element={<HomeOrg />} />
              <Route path="/events" element={<Events />} />
              <Route path="/volunteers" element={<Volunteers />} />
              <Route path="/create" element={<CreateEvent />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Main>
        )}
        <ToastContainer />
      </AppContext.Provider>
    </LanguageProvider>
  );
}

export default App;
