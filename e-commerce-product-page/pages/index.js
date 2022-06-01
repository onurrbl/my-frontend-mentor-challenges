import Head from 'next/head'
import ProductsList from '../components/ProductsList'

export default function Home( { products }) {
  
  return (
    <>
      <ProductsList data-theme='dark' products={products}/>
    </>
  )
}

export async function getStaticProps() {

  let fakeStoreApiUrl = 'https://fakestoreapi.com/products'

  const res = await fetch(fakeStoreApiUrl)
  const products = await res.json()


  return {
    props: {
      products,
    },
  }
}