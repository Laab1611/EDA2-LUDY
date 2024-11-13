import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { dispatch, state } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const lastPage = location.state?.from?.pathname || state.lastPage || "/";

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { username: "FakeUser" } });
    dispatch({ type: "SET_LAST_PAGE", payload: lastPage });
    navigate(lastPage, { replace: true });
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <button
        onClick={handleLogin}
        style={{
          color: '#fff',
          backgroundColor: 'black',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginPage;