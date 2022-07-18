import { auth, signInWithEmailAndPassword } from "../firebase";

const signIn = async ({ loginEmail, loginPassword }) => {
  try {
    const {
      user: { accessToken, uid },
    } = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    return { accessToken, uid };
  } catch (e) {
    console.log("Error Code", e.code);
    console.log("Error Msg", e.message);
  }
};

export default signIn;
