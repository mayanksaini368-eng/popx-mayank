import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import CreateAccountPage from "./components/CreateAccountPage";
import LoginPage from "./components/LoginPage";
import AccountSettingsPage from "./components/AccountSettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/account-setting" element={<AccountSettingsPage />} />
    </Routes>
  );
}

export default App;
