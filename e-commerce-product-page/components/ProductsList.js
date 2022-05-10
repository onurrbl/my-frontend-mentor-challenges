import React, { useEffect } from 'react'
import Product from './product'
import styles from './ProductsList.module.scss'


const ProductsList = ( { products }) => {


  // useEffect(() => {
  //   if (filter !== 'All'){
  //       products.filter(product => product.category === filter)
  //   }
  // },[filter])

  const mappedProducts = products.map(product => {
    return (
      <Product product={product} key={product.id} />
    )
  })

  return (<section className={styles.productListCtn}>
      
     
     { mappedProducts }


  </section>
  )
}

export default ProductsList