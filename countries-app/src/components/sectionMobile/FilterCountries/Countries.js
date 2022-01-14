import React ,{  useState } from 'react'
import { CountryContext } from '../../Contexts/CountryContxt'
import Country from './Country'




const Countries = () => {

    const {Countries, isLoading} = React.useContext(CountryContext);
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
