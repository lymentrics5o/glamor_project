import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate for React Router v6

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();  // useNavigate hook for navigation

  useEffect(() => {
    // Hide splash screen and navigate to /home after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate('/home');  // Navigate to /home after splash screen is done
    }, 5000); // You can adjust this delay as needed

    return () => clearTimeout(timer);  // Clean up the timer on unmount
  }, [navigate]);  // useNavigate hook as a dependency

  if (isLoading) {
    return (
      <div className="splash-screen">
        <h1>WELCOME TO NOVA PHARMACEUTICALS</h1>
      </div>
    );
  }

  return null; // The splash screen will render only for the specified duration
};

export default SplashScreen;