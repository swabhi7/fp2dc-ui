import React, { useState } from "react";
import Modal from "../../utilities/Modal.component";
import Menu from "./Menu.component";
import classes from "./Navbar.module.css";
import Search from "./Search.component";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
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
        {/* <Sidebar></Sidebar> */}
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
