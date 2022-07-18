import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";

export const LoginContext = createContext();
export const AccessContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginToken, setLoginToken] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") ?? "";
    if (accessToken) {
      setIsLogin(true);
      setLoginToken(loginToken);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <LoginContext.Provider value={isLogin}>
      <AccessContext.Provider value={loginToken}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/user" element={<User />} /> */}
            {/* <Route path="/user/profile" element={<Profile />} /> */}
            {/* <Route path="/videos/upload" element={<Upload />} /> */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AccessContext.Provider>
    </LoginContext.Provider>
  );
};

export default App;
