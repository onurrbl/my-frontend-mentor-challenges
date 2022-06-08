import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import NewSidebar from "./NewSidebar";

const Layout = ({ children }) => {
  const [isCartOpen, SetIsCartOpen] = useState(false);
  const [isMobileNavOpen, SetIsMobileNavOpen] = useState(false);
  const darkMode = useSelector(state => state.filter.theme)
  

  const toggleCartHandler = () => {
    SetIsCartOpen(!isCartOpen);
  };


  const toggleMobileNavHandler = () => {
    SetIsMobileNavOpen(!isMobileNavOpen);
  };


  const theme = darkMode === 'dark' ? "dark" : "light";
  return (
    <div className="theme-wrapper" data-theme={theme}>
      <Navbar
        onMobileNavHandler={toggleMobileNavHandler}
        onCartHandler={toggleCartHandler}
      />
      {isCartOpen ? <Cart /> : ""}
      <Modal isMobileNavOpen={isMobileNavOpen}></Modal>
      {isMobileNavOpen ? (
        <Sidebar
          onMobileNavHandler={toggleMobileNavHandler}
          isMobileNavOpen={isMobileNavOpen}
        />
      ) : (
        ""
      )}
      {/* <NewSidebar/> */}
      <main>{children}</main>
    </div>
  );
};

export default React.memo(Layout);
