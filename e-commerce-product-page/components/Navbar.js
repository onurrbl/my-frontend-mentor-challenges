import React from "react";
import Image from "next/image";
import logo from ".//../images/logo.svg";
import imgAvatar from ".//../images/image-avatar.png";
import icnCart from ".//../images/icon-cart.svg";
import icnMenu from ".//../images/icon-menu.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="flex al-center justify-center ">
        <button>
          {" "}
          <Image alt="navMenu" src={icnMenu}></Image>
        </button>
        <div>
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={20}
            className="al-self-center"
          ></Image>
        </div>
      </div>

      <ul >
        <li>Collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="flex al-center cart-ctn">
        <div className={styles.img}>
          <Image src={icnCart}  alt="cart"></Image>
        </div>

        <div>
          <Image
            alt="Avatar"
            src={imgAvatar}
            width={50}
            height={50}
            className="al-self-center img"
          ></Image>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
