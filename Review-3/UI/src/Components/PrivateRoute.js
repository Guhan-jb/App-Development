import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Login from '../Pages/LoginPage';
// This is a simple example of an authentication check function.
// In a real application, you would use your authentication logic.
const isAuthenticated = () => {
  const token = localStorage.getItem('Token');
  return token !== null;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const nav = useNavigate(); // Move useNavigate inside the component function
  
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? (
        <Component />
      ) : (
        <Login /> // Use <Navigate> to redirect
      )}
    />
  );
};

export default PrivateRoute;
