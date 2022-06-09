import React from "react"
import styles from "./Modal.module.scss"

const Modal = (props, { children }) => {
  return (
    <div
      className={`${styles.modalWindow}  ${
        props.isMobileNavOpen ? styles.modalActive : ""
      }`}
    >
      {children}
    </div>
  )
}

export default React.memo(Modal)
