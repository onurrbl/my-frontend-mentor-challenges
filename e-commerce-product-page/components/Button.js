import React from "react"
import styles from "./Button.module.scss"
import icnCart from ".//../images/icon-cart.svg"
import Image from "next/image"

const Button = (props) => {
  // Should have used props.children yeah somehow i forgot i will refactor later
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.text ? <h1>{props.text}</h1> : ""}
      {props.cart ? <Image src={icnCart} alt="cart" /> : ""}
    </button>
  )
}

export default Button
