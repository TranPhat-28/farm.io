import "./style.scss";
import { type ISidebarLayout, SidebarType } from "./types";
import { VisitSidebar, SidebarB, SidebarC } from "../../components";
import { useState } from "react";

export const SidebarLayout = ({ children }: ISidebarLayout) => {
  const [sidebarType, setSidebarType] = useState<SidebarType>(
    SidebarType.VISIT
  );
  const [hideSidebar, setHideSidebar] = useState<boolean>(false);

  const handleSetSidebarType = (sidebarType: SidebarType) => {
    setSidebarType(sidebarType);
    if (hideSidebar) {
      toggleSidebar();
    }
  };

  const toggleSidebar = () => {
    setHideSidebar((state) => !state);
  };

  return (
    <div className="sidebar-layout">
      <div className={`sidebar-wrapper ${hideSidebar ? "hide" : ""}`}>
        {sidebarType === SidebarType.VISIT && <VisitSidebar />}
        {sidebarType === SidebarType.B && <SidebarB />}
        {sidebarType === SidebarType.C && <SidebarC />}

        <div
          className={`toggle-btn ${hideSidebar ? "hide" : ""}`}
          onClick={toggleSidebar}>
          <div className="arrow"></div>
        </div>
      </div>

      {children}

      <div className="function-list">
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.VISIT)}>
          a
        </button>
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.B)}>
          b
        </button>
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.C)}>
          c
        </button>
      </div>
    </div>
  );
};
