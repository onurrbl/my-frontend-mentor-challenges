import React from "react";
import Image from "next/image";
import styles from "./Product.module.scss";
import Button from "./Button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const onCartButtonClick = () => {
    const amount = 1;
    const { id, image, title, price } = product;
    dispatch(addProductToCart({ id, image, title, price, amount }));
  };

  return (
    <div className={styles.productCtn}>
      <Link href={`/product/${product.id}`} passHref>
        <div className={styles.imgIconWrapper}>
          <FontAwesomeIcon size="lg" className={styles.fontAwesomeIcon} icon={faMagnifyingGlass}/>
          {" "}
          <div className={styles.imageHover}>
            </div>
          <Image
            src={product.image}
            alt="product thumbnail"
            width={400}
            height={400}
          />

        </div>
      </Link>
      <div className={styles.productBody}>
        <h1>{product.title}</h1>
        <div className="flex">
          <span>{product.price}</span>
          <Button cart={true} onClick={onCartButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Product;
