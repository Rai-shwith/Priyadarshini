import React from "react";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import AdmissionForm from "./components/AdmissionForm";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { NotificationProvider } from "./context/NotificationContext";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <NotificationProvider>
        <Background>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admission" element={<AdmissionForm />} />
          </Routes>
        </Background>
      </NotificationProvider>
    </LanguageProvider>
  );
};

export default App;
