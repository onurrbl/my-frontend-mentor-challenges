import React from "react";
import styles from "./Cart.module.scss";
import icnDelete from ".//../images/icon-delete.svg";
import Image from "next/image";
import imgThnail from ".//../images/image-product-1-thumbnail.jpg";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../slices/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  return (
    <div className={styles.cartCtn}>
      <div className={styles.carthead}>
        <h2>Cart</h2>
      </div>
      <div>
        {cartProducts.length > 0 ? cartProducts.map((product) => {
          return (
            <div className={styles.cartItem} key={product.id}>
              <div className={styles.imgWrapper}>
                <Image
                  src={product.image}
                  width={60}
                  height={60}
                  alt="item-thumbnail"
                ></Image>
              </div>
              <div className={styles.cartItemBody}>
                <div>
                  <p maxLength="24">{product.title.substring(0, 25)}</p>
                </div>
                <div>
                  <span>${product.price}</span> x <span> {product.amount}</span>{" "}
                  <strong>${product.price * product.amount}</strong>
                </div>
              </div>
              <div
                className="justify-center al-center flex"
                onClick={() => {
                  const id = product.id;
                  dispatch(removeProductFromCart({ id }));
                }}
              >
                <Image
                  src={icnDelete}
                  alt="delete-item-icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          );
        }) : <p>Your cart is empty.</p>}

        <div className={styles.cartItem}>
          <div className={styles.imgWrapper}>
            <Image
              src={imgThnail}
              width={60}
              height={60}
              alt="item-thumbnail"
            ></Image>
          </div>
          <div className={styles.cartItemBody}>
            <div>
              <p>Autumn Limited Edition...</p>
            </div>
            <div>
              <span>$125.00</span> x <span> 3</span> <strong>$375.00</strong>
            </div>
          </div>
          <div className="justify-center al-center flex">
            <Image
              src={icnDelete}
              alt="delete-item-icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className={styles.btnCtn}>
        <Button text="Checkout" />
      </div>
    </div>
  );
};

export default React.memo(Cart);
