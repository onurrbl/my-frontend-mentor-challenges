import React from 'react'
import ProductPage from '../../components/ProductPage'

const index = ( { product }) => {


  return (
    <main>
    <ProductPage product={product}/>
  </main>
  )
}

export default index

export async function getStaticPaths() {
  let fakeStoreApiUrl = 'https://fakestoreapi.com/products'
  const res = await fetch(fakeStoreApiUrl)
  const products = await res.json()


  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))


  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()

  return { props: { product } }
}