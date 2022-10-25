import React, { useState } from "react";
import Modal from "../../utilities/Modal.component";
import Sidebar from "../../utilities/Sidebar.component";
import Menu from "./Menu.component";
import classes from "./Navbar.module.css";
import Search from "./Search.component";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={classes["navbar"]}>
      <div className={classes["logo"]}>
        <img alt="logo" src={logo} />
        <span>fp2dc</span>
      </div>
      <div className={classes["menu"]}>
        {
          <Modal show={showModal} onDismiss={() => setShowModal(false)}>
            <Search forseExpand={true} />
          </Modal>
        }
        <Search searchExpandHandler={() => setShowModal(true)} />
        {
          <Sidebar show={showSidebar} onDismiss={() => setShowSidebar(false)}>
            <Menu
              insideSidebar={true}
              sidebarCloseHandler={() => setShowSidebar(false)}
            />
          </Sidebar>
        }
        <Menu showSidebarHandler={() => setShowSidebar(true)} />
      </div>
    </div>
  );
};

export default Navbar;
