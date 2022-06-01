import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./product";
import styles from "./ProductsList.module.scss";

const ProductsList = ({ products }) => {
  const filter = useSelector((state) => state.filter.filter);
  const [filteredProducts, SetFilteredProducts] = useState(products);

  useEffect(() => {
    if (filter === "all") {
      SetFilteredProducts(products);
    } else {
      const tempfilteredProducts = products.filter(
        (product) => product.category === filter
      );
      SetFilteredProducts(tempfilteredProducts);
    }
  }, [filter]);

  const mappedProducts = filteredProducts.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return <section className={styles.productListCtn}>{mappedProducts}</section>;
};

export default ProductsList;
