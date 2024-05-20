import { SidebarType } from "../../layouts/SidebarLayout/types";
import { useDispatch } from "react-redux";
import { changeSidebar, toggleSidebar } from "../../redux/features/sidebarSlice";
import "./style.scss";
import { getAuth, signOut } from "firebase/auth";
import { removeAuthUser } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            // Remove from Redux
            dispatch(removeAuthUser());
            navigate("/");
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    };

    return (
        <div className="function-list">
            <button className="function"
                onClick={handleLogout}>
                -
            </button>
            <button className="function"
                onClick={() => dispatch(toggleSidebar())}>
                X
            </button>
            <button className="function"
                onClick={() => dispatch(changeSidebar(SidebarType.DASHBOARD))}>
                A
            </button>
            <button className="function"
                onClick={() => dispatch(changeSidebar(SidebarType.PET))}>
                B
            </button>
        </div>
    );
};

export default Navigation;