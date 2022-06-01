import React from "react";
import Image from "next/image";
import logo from ".//../images/logo.svg";
import imgAvatar from ".//../images/image-avatar.png";
import icnCart from ".//../images/icon-cart.svg";
import icnMenu from ".//../images/icon-menu.svg";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, changeTheme } from "../slices/filterSlice";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.filter.theme);
  const currentFilter = useSelector((state) => state.filter.filter);

  const filterChangeHandler = (e) => {
    const filter = e.target.getAttribute("value");
    dispatch(changeFilter(filter));
  };

  const themeChangeHandler = () => {
    let theme;
    currentTheme === "dark" ? (theme = "light") : (theme = "dark");
    dispatch(changeTheme(theme));
  };
  return (
    <nav className={styles.navbar}>
      <div className="flex al-center justify-center ">
        <button onClick={props.onMobileNavHandler}>
          {" "}
          <Image alt="navMenu" src={icnMenu}></Image>
        </button>

        <div className="flex ">
          <div className="justify-center al-center cursor-p flex ">
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="logo"
                width={140}
                height={20}
                className="al-self-center"
              ></Image>
            </Link>
          </div>
          <ul>
            <li  onClick={filterChangeHandler} value="all">
              Collection
              {currentFilter === 'all' ? <div className={styles.current_nav}></div> : ''}

            </li>
            <li onClick={filterChangeHandler} value="men's clothing">
              Men
              {currentFilter === `men's clothing` ? <div className={styles.current_nav}></div> : ''}
            </li>
            <li onClick={filterChangeHandler} value="women's clothing">
              Women
              {currentFilter === `women's clothing` ? <div className={styles.current_nav}></div> : ''}
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className={styles.theme_switch_wrapper}>
        <label
          className="theme-switch"
          htmlFor="checkbox"
        >
          {/* <label onClick={props.onThemeToggle} className="theme-switch" htmlFor="checkbox"> */}
          <input onClick={themeChangeHandler} type="checkbox" id="checkbox" />
          <div className={styles.slider}></div>
        </label>
        <em>Enable Dark Mode!</em>
      </div>

      <div className="flex al-center cart-ctn">
        <div className={styles.img} onClick={props.onCartHandler}>
          <Image src={icnCart} alt="cart"></Image>
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

export default React.memo(Navbar);
