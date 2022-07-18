import { auth, createUserWithEmailAndPassword } from "../firebase";

const register = async ({ registerEmail, registerPassword, setErrorMsg }) => {
  try {
    setErrorMsg("  ");
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    return createdUser;
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

export default register;
