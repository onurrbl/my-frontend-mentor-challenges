import React from "react";
import icnModalClose from ".//../images/icon-close.svg";
import Image from "next/image";
import styles from './Sidebar.module.scss';
import Modal from "./Modal";

const Sidebar = (props) => {
  return (


      <section className={`${styles.sidebarCtn}  + ' ' + ${props.isMobileNavOpen ? styles.sbarActive : styles.sbarClose } `}>
      <div onClick={props.onMobileNavHandler}>
      <Image src={icnModalClose} alt="Modal-close" width={15} />
      </div>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </section>


  );
};

export default Sidebar;
