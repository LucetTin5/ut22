import Headers from "../components/Headers";
import { useState, useEffect } from "react";
import signIn from "../functions/sign-in";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleChange =
    (prop) =>
    ({ target: { value } }) => {
      switch (prop) {
        case "email":
          setLoginEmail(value);
          break;
        case "password":
          setLoginPassword(value);
          break;
      }
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { accessToken, uid } = await signIn({ loginEmail, loginPassword });
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("uid", uid);
      location.href = "/";
    }
  };
  return (
    <>
      <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={loginEmail}
          onChange={handleChange("email")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={loginPassword}
          onChange={handleChange("password")}
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
