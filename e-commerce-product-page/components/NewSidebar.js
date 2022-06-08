import React from "react"
import styles from "./NewSidebar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPerson,
  faPersonDress,
  faLaptop,
  faGem,
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../slices/filterSlice"

const NewSidebar = () => {
  const dispatch = useDispatch()
  const currentFilter = useSelector((state) => state.filter.filter)

  const filterChangeHandler = (e) => {
    const filter = e.currentTarget.getAttribute("value")
    dispatch(changeFilter(filter))
  }

  return (
    <div className={styles.sidebarContainer}>
      <ul>
        {/* <li><FontAwesomeIcon shake icon={faPerson}/></li>
            <li><FontAwesomeIcon fade icon={faPersonDress}/></li>
            <li><FontAwesomeIcon spin  icon={faLaptop}/></li>
            <li><FontAwesomeIcon bounce icon={faGem}/></li>
            <li><FontAwesomeIcon beat icon={faPerson}/></li> */}

        <li onClick={filterChangeHandler} value="all">
          <FontAwesomeIcon value="all" shake={currentFilter === 'all'} size="lg" icon={faAlignCenter} />
        </li>
        <li onClick={filterChangeHandler} value="men's clothing">
          <FontAwesomeIcon value="men's clothing" shake={currentFilter === "men's clothing"} size="lg" icon={faPerson} />
        </li>
        <li onClick={filterChangeHandler} value="women's clothing">
          <FontAwesomeIcon
            value="women's clothing"
            shake={currentFilter === "women's clothing"}
            size="lg"
            icon={faPersonDress}
          />
        </li>
        <li onClick={filterChangeHandler} value="electronics">
          <FontAwesomeIcon value="electronics" shake={currentFilter === "electronics"} size="sm" icon={faLaptop} />
        </li>
        <li onClick={filterChangeHandler} value="jewelery">
          <FontAwesomeIcon value="jewelery" shake={currentFilter ==="jewelery"} size="sm" icon={faGem} />
        </li>
      </ul>
    </div>
  )
}

export default NewSidebar
