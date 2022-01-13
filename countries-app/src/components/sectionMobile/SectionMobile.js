import React from 'react'
import SearchFilter from './FilterCountries/SearchFilter/SearchFilter';
import Countries from './FilterCountries/Countries'

const SectionMobile = () => {
    return (
        <main className='w-full'>
            <SearchFilter></SearchFilter>

            <Countries></Countries>
        </main>

    )
}

export default SectionMobile
