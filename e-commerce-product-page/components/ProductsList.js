import React, { useEffect } from 'react'
import Product from './product'
import styles from './ProductsList.module.scss'


const ProductsList = () => {

  // useEffect(() => {
    
  // }, [])


  return (<section className={styles.productListCtn}>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      

  </section>
  )
}

export default ProductsList