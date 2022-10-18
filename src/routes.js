import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/dashboard";
import { Login } from "./components/logins/login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
