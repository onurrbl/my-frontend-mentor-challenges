import React from "react";
import Image from "next/image";
import Button from "./Button.js";
import prImg from "./../images/image-product-1.jpg";
import styles from "./ProductPage.module.scss";
import minusIcn from "./../images/icon-minus.svg";
import plusIcn from "./../images/icon-plus.svg";
import SlideController from "./SlideController.js";

const ProductPage = () => {
  return (
    <div className={styles.product}>
      <div className={styles.imgSlider}>
        <Image src={prImg} alt="product-image" width={1000} />
        <div className={styles.controllerWrapper}>
        <SlideController></SlideController>
        </div>
      </div>
      <div className={styles.productBody}>
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="product-desc color-gray">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, theyll withstand everything the
          weather can offer
        </p>
        <div className={styles.productPriceSection}>
          <div className="flex">
            <span>
              <strong>$125.00</strong>
            </span>
            <span className={styles.discountSpan}>50%</span>
          </div>
          <span className="color-gray cancelled">$250.00</span>
        </div>
        <div className={styles.quantityCtn}>
          <div className={styles.quantityController}>
            <button className="minus">
              <Image src={minusIcn} alt="minus" width={20} height={7} />{" "}
            </button>

            <span>
              <strong>2</strong>
            </span>
            <button className="plus">
              <Image src={plusIcn} alt="plus" width={20} height={20} />{" "}
            </button>
          </div>
          <Button text={"AddtoCart"} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
