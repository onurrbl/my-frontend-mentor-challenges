import React, { useState } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isCartOpen, SetIsCartOpen] = useState(false);
  const [isMobileNavOpen, SetIsMobileNavOpen] = useState(false);

  const toggleCartHandler = () => {
    SetIsCartOpen(!isCartOpen);
  };
  const toggleMobileNavHandler = () => {
    SetIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <Navbar
        onMobileNavHandler={toggleMobileNavHandler}
        onCartHandler={toggleCartHandler}
      />
      {isCartOpen ? <Cart /> : ""}
      <Modal isMobileNavOpen={isMobileNavOpen}></Modal>
      {
        isMobileNavOpen ? 

        <Sidebar
          onMobileNavHandler={toggleMobileNavHandler}
          isMobileNavOpen={isMobileNavOpen}
        /> : ''

      }
      <main>{children}</main>
    </>
  );
};

export default Layout;
