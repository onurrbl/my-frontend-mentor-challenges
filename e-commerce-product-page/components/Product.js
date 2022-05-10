import React from "react";
import Image from "next/image";
import styles from "./Product.module.scss";
import Button from './Button';
import Link from 'next/link'

const Product = ( { product }) => {
  return (
    <Link href={`/product/${product.id}`} passHref>
    
    <div className={styles.productCtn}>
      <div>
        {" "}
        <Image
          src={product.image}
          alt="product thumbnail"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.productBody}>
        <h1>{product.title}r</h1>
        <div className="flex">
        <span>{product.price}</span>
        <Button cart={true} />

        </div>

      </div>

    </div>
    </Link>
  );
};

export default Product;
