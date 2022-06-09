import React, { useState } from "react"
import Image from "next/image"
import Button from "./Button.js"
import styles from "./ProductPage.module.scss"
import minusIcn from "./../images/icon-minus.svg"
import plusIcn from "./../images/icon-plus.svg"
import { useDispatch } from "react-redux"
import { addProductToCart } from "../slices/cartSlice.js"
import Head from "next/head"

// import SlideController from "./SlideController.js";

const ProductPage = ({ product }) => {
  const dispatch = useDispatch()
  const [amount, SetAmount] = useState(1)

  const minusAmountHandler = () => {
    if (amount !== 1) {
      SetAmount(amount - 1)
    }
  }

  const plusAmountHandler = () => {
    SetAmount(amount + 1)
  }

  const onCartButtonClick = () => {
    const { id, image, title, price } = product
    dispatch(addProductToCart({ id, image, title, price, amount }))
  }

  return (
    <div className={styles.product}>
      <Head>
        <title>{product.title}</title>
        <meta property="og:title" content={product.title} key="title" />
      </Head>
      <div className={styles.imgSlider}>
        <Image
          src={product.image}
          alt="product-image"
          width={1000}
          height={1000}
        />
        <div className={styles.controllerWrapper}>
          {/* <SlideController></SlideController> */}
        </div>
      </div>
      <div className={styles.productBody}>
        <h3>SNEAKER COMPANY</h3>
        <h1>{product.title}</h1>
        <p className="product-desc color-gray">{product.description}</p>
        <div className={styles.productPriceSection}>
          <div className="flex">
            <span>
              <strong>${product.price}</strong>
            </span>
            <span className={styles.discountSpan}>50%</span>
          </div>
          <span className="color-gray cancelled">${product.price * 2}</span>
        </div>
        <div className={styles.quantityCtn}>
          <div className={styles.quantityController}>
            <button onClick={minusAmountHandler} className="minus">
              <Image src={minusIcn} alt="minus" width={20} height={7} />{" "}
            </button>

            <span>
              <strong>{amount}</strong>
            </span>
            <button onClick={plusAmountHandler} className="plus">
              <Image src={plusIcn} alt="plus" width={20} height={20} />{" "}
            </button>
          </div>
          <Button text={"AddtoCart"} onClick={onCartButtonClick} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
