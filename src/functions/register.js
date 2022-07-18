import { auth, createUserWithEmailAndPassword } from "../firebase";
import { useState } from "react";

const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPasswrod] = useState("");
const [errorMsg, setErrorMsg] = useState("");

const register = async () => {
  try {
    setErrorMsg("  ");
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(createdUser);
    setRegisterEmail;
  } catch (e) {
    switch (e.code) {
      case "auth/weak-password":
        setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
        break;
      case "auth/invalid-email":
        setErrorMsg("잘못된 이메일 주소입니다");
        break;
      case "auth/email-already-in-use":
        setErrorMsg("이미 가입되어 있는 계정입니다");
        break;
    }
  }
};
