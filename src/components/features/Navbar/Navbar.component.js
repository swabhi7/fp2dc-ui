import React, { useState } from "react";
import Modal from "../../utilities/Modal.component";
import Sidebar from "../../utilities/Sidebar.component";
import Menu from "./Menu.component";
import classes from "./Navbar.module.css";
import Search from "./Search.component";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={classes["navbar"]}>
      <div className={classes["logo"]}>&lt; FP2DC / &gt;</div>
      <div className={classes["menu"]}>
        {showModal && (
          <Modal onDismiss={() => setShowModal(false)}>
            <Search forseExpand={true} />
          </Modal>
        )}
        <Search searchExpandHandler={() => setShowModal(true)} />
        {showSidebar && (
          <Sidebar onDismiss={() => setShowSidebar(false)}>
            <Menu />
          </Sidebar>
        )}
        <Menu showSidebarHandler={() => setShowSidebar(true)} />
      </div>
    </div>
  );
};

export default Navbar;
