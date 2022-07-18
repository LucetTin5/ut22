import { auth, signOut } from "../firebase";

const logout = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("uid");
      console.log("Sign-out successful");
      window.location.reload();
    })
    .catch(() => console.log("An error happend"));
};

export default logout;
