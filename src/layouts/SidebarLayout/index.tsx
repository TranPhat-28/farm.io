import "./style.scss";
import { type ISidebarLayout, SidebarType } from "./types";
import {
  DashboardSidebar,
  PetSidebar,
  Navigation,
} from "../../components";
import { useEffect } from "react";
import { setPetsInStock, setPetsInFarm } from "../../redux/features/petSlice";
import { useDispatch, useSelector } from "react-redux";
import { PETS_IN_FARM, PETS_IN_STOCK } from "./mock-data";
import { RootState } from "../../redux/store";

export const SidebarLayout = ({ children }: ISidebarLayout) => {
  // Redux
  const dispatch = useDispatch();
  const { visible, type } = useSelector((state: RootState) => state.sidebar);

  useEffect(() => {
    dispatch(setPetsInStock(PETS_IN_STOCK));
    dispatch(setPetsInFarm(PETS_IN_FARM));
  }, []);

  return (
    <div className="sidebar-layout">
      <div className={`sidebar-wrapper ${visible ? "" : "hide"}`}>
        {type === SidebarType.DASHBOARD && <DashboardSidebar />}
        {type === SidebarType.PET && <PetSidebar />}
      </div>

      {children}

      <Navigation />
    </div>
  );
};
