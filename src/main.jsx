import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/store.js";
import TeamPage from "./pages/TeamPage.jsx";
import NavBar from "./components/NavBar.jsx";
import Login from "./pages/Login.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import SavedTeams from "./pages/SavedTeams.jsx";
import TeamDetails from "./pages/TeamDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:id" element={<TeamDetails />} />
          <Route path="/teams" element={<SavedTeams />} />
          <Route path="/user/:uid" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
