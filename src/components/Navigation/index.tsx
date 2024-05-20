import { SidebarType } from "../../layouts/SidebarLayout/types";
import { useDispatch } from "react-redux";
import { changeSidebar, toggleSidebar } from "../../redux/features/sidebarSlice";
import "./style.scss";

export const Navigation = () => {

    const dispatch = useDispatch();

    return (
        <div className="function-list">
            <button className="function"
                onClick={() => dispatch(toggleSidebar())}>
                X
            </button>
            <button className="function"
                onClick={() => dispatch(changeSidebar(SidebarType.DASHBOARD))}>
                A
            </button>
            <button className="function"
                onClick={() => dispatch(changeSidebar(SidebarType.B))}>
                B
            </button>
            <button className="function"
                onClick={() => dispatch(changeSidebar(SidebarType.C))}>
                C
            </button>
        </div>
    );
};

export default Navigation;