import { initializeApp } from "firebase/app";
import "./style.scss";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const SidebarB = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyBeDvP9tqSPQ2gmEqx-aZa-sHDfSzB7Wqc",
    authDomain: "farm-io-6db6a.firebaseapp.com",
    projectId: "farm-io-6db6a",
    storageBucket: "farm-io-6db6a.appspot.com",
    messagingSenderId: "59863559921",
    appId: "1:59863559921:web:1d0b9bcb9f634817914350"
  };

  initializeApp(firebaseConfig);

  const auth = getAuth();

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result);
    }
    catch (e) {
      console.log(e);
    }
  };

  return <div className="sidebar-b">
    <button className="auth-btn google-btn" onClick={googleLogin}>G</button>
    <button className="auth-btn facebook-btn">F</button>
  </div>;
};
