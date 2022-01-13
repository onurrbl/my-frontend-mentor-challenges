import React ,{ useEffect, useState } from 'react'
import Country from './Country'




const Countries = () => {
    const [Countries, setCountries] = useState([]) ;
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
          .then(res => res.json())
          .then(
            (result) => {
                setCountries(result)
                setIsLoading(false)
            },    
          )
          .catch(error => {
              console.log('Error: ', error)
          })
      }, [])

      console.log(Countries);

    return (
        <section className='w-full flex  justify-center  flex-wrap'>
           {
            isLoading ? 'loading' :   <>
            <Country country={Countries[9]} />
            <Country country={Countries[39]} />
            <Country country={Countries[59]} />
            <Country country={Countries[49]} />
            <Country country={Countries[52]} />
            <Country country={Countries[69]} />
            <Country country={Countries[58]} />
            <Country country={Countries[55]} />
            </>
               

           }
        </section>
    )
}

export default Countries
