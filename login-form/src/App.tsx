import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage/LoginPage';
import ForgotPassword from "./features/auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSuccess from "./features/auth/ForgotPassword/ForgotPasswordSuccess";
import ForgotPasswordExpired from "./features/auth/ForgotPassword/ForgotPasswordExpired";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/success" element={<ForgotPasswordSuccess />} />
        <Route path="/forgot-password/expired" element={<ForgotPasswordExpired />} />

      </Routes>
    </Router>
  );
}

export default App;
