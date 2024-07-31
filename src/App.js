import React, { useEffect, useState } from "react";
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
import CreateEvent from "./pages/Auth/CreateEvent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditEvent from "./pages/Auth/EditEvent";
import EventSummary from "./pages/Auth/EventSummary";
import AllVolunteers from "./pages/Auth/AllVolunteers";
import EventAttendance from "./pages/Auth/EventAttendance";
import NotFoundPage from "./pages/unAuth/NotFoundPage";
import RateVolunteer from "./pages/Auth/RateVolunteer";

function App() {
  const [app, setApp] = useState({
    theme: "Light",
    user: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setApp({ ...app, user: true });
    }
  }, []);
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
              <Route path="/volunteers" element={<AllVolunteers />} />
              <Route path="/create" element={<CreateEvent />} />
              <Route path="/rate" element={<RateVolunteer />} />
              <Route path="/edit" element={<EditEvent />} />
              <Route path="/attendance" element={<EventAttendance />} />
              <Route path="/summary/:eventId" element={<EventSummary />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Main>
        )}
        <ToastContainer />
      </AppContext.Provider>
    </LanguageProvider>
  );
}

export default App;
