import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./components/context";

// useRef(); - Этот хук позволяет получать доступ к DOM-элементу
// useMemo(); - Этот хук позволяет кэшировать информацию

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
