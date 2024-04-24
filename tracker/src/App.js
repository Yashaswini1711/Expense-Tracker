import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import SignupPage from './pages/SignupPage';
import AnalyticsPage from './pages/AnalyticsPage';
import StartPage from './pages/StartPage';
import PasswordResetPage from './pages/PasswordResetPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminAnalyticsPage from './pages/AdminAnalyticsPage';

function App() {
  return (
    <Router> {/* Wrap the entire App component with the Router component */}
      <AppContent />
    </Router>
  );
}

function AppContent() {
  // Custom hook to get the current location
  const location = useLocation();

  // Define an array of paths where Navbar should not be displayed
  const hideNavbarPaths = ['/login', '/signup', '/admin', '/adminAnalytics','/']; // Updated to include admin paths
  // Function to check if Navbar should be hidden based on current path
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route exact path="/" element={<StartPage />} /> 
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/passwordReset" element={<PasswordResetPage/>}/>
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/analytics" element={<AnalyticsPage />} />
        <Route exact path="/admin" element={<AdminDashboardPage />} />
        <Route exact path="/adminAnalytics" element={<AdminAnalyticsPage />} />

      </Routes>
    </>
  );
}

export default App;