import React from "react";
import productThb from "../images/image-product-1.jpg";
import Image from "next/image";
import styles from "./Product.module.scss";
import Button from './Button';
import icnCart from ".//../images/icon-cart.svg";

const Product = () => {
  return (
    <div className={styles.productCtn}>
      <div>
        {" "}
        <Image
          src={productThb}
          alt="product thumbnail"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.productBody}>
        <h1>Fall Limited Editions Sneaker</h1>
        <div className="flex">
        <span>125.00</span>
        <Button cart={true} />

        </div>

      </div>

    </div>
  );
};

export default Product;
