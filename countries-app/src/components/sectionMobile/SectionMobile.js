import React, { useState } from 'react'
import SearchFilter from './FilterCountries/SearchFilter/SearchFilter';
import Countries from './FilterCountries/Countries'
import { SearchFilterContext } from '../Contexts/SearchAndFilterContext';


const SectionMobile = () => {
    const [Search, SetSearch] = useState('')
    const [Region, SetRegion] = useState('ALL')
    return (
        <main className='w-full'>
            <SearchFilterContext.Provider value={{Search , SetSearch, Region, SetRegion}}>

            <SearchFilter></SearchFilter>

            <Countries></Countries>
            </SearchFilterContext.Provider>
        </main>

    )
}

export default SectionMobile
