import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./product";
import styles from "./ProductsList.module.scss";
import NewSidebar from "./NewSidebar";

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

  return <>
  <NewSidebar/>
  <section className={styles.productListCtn}>{mappedProducts}</section>;
  </>
};

export default ProductsList;
