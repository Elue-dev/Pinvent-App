import React, { useState } from "react";
import {
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiProductHuntLine,
} from "react-icons/ri";
import menu from "../data/sidebar";
import SidebarItem from "../sidebar/Sidebaritem";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <RiProductHuntLine
              size={35}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
          >
            {isOpen ? (
              <RiMenuFoldLine onClick={toggle} />
            ) : (
              <RiMenuUnfoldLine onClick={toggle} />
            )}
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
