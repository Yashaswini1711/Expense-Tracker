import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../styles/StartPage.png'; // Import your app logo image
import './../styles/StartPage.css';

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000); // Redirect after 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigate]);

  return (
    <div className="start-page d-flex justify-content-center align-items-center">
      {/* Add your app logo with some effects here */}
      <img src={logo} alt="App Logo" className="img-fluid logo" />
    </div>
  );
}

export default StartPage;
