import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

export const LoginContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginToken, setLoginToken] = useState("");

  return (
    <LoginContext.Provider value={isLogin}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/join" element={<Join />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/user" element={<User />} /> */}
          {/* <Route path="/user/profile" element={<Profile />} /> */}
          {/* <Route path="/videos/upload" element={<Upload />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default App;
