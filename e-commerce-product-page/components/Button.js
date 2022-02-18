import React from 'react'
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={styles.btn} onClick={props.onCllick} >
        <h3>{props.text}</h3>
    </button>
  )
}

export default Button