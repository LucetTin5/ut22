import register from "../functions/register";
import { useState } from "react";

const Join = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange =
    (prop) =>
    ({ target: { value } }) => {
      switch (prop) {
        case "email":
          setRegisterEmail(value);
          break;
        case "password":
          setRegisterPassword(value);
          break;
      }
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      user: { accessToken },
    } = await register({
      registerEmail,
      registerPassword,
      setErrorMsg,
    });
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      location.href = "/";
    }
  };

  return (
    <>
      {errorMsg ? <span>{errorMsg}</span> : <></>}
      <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={registerEmail}
          onChange={handleChange("email")}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={registerPassword}
          onChange={handleChange("password")}
          required
        />
        <input type="submit" value="Join" />
      </form>
    </>
  );
};

export default Join;
