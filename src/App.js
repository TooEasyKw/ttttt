import { useState } from "react";
import "./App.css";
import AppContext from "./context/AppContext";
import { LanguageProvider } from "./context/LanguageProvider";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const [app, setApp] = useState({
    theme: "Light",
    user: false,
  });

  return (
    <LanguageProvider>
      <AppContext.Provider value={{ app, setApp }}>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/" Component={Home} />
        </Routes>
      </AppContext.Provider>
    </LanguageProvider>
  );
}

export default App;
