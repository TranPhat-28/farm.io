import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addAuthUser } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const LoginLayout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

            // console.log(result.user.displayName);
            dispatch(addAuthUser(result.user.displayName!));
            navigate('/home');
        }
        catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="login__page-body">
            <div className="login__container">
                <img alt="logo" src="/logo.svg" />
                <h1>Welcome to Farm.io</h1>
                <button onClick={googleLogin}>
                    <span>Login using Google</span>
                </button>
                <span>Developed by PD team</span>
            </div>
        </div>
    );
};

export default LoginLayout;