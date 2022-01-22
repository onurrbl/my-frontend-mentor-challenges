import React from 'react'
import { SearchFilterContext } from '../../../Contexts/SearchAndFilterContext'

const SearchFilter = () => {
    const {Search, SetSearch, Region, SetRegion} = React.useContext(SearchFilterContext)
    
    return (
        <div className='flex flex-wrap justify-between'>
            <input  onChange={ (e) => {SetSearch(e.target.value)}} className='rounded bg-vdb2 p-4 w-11/12 md:w-96 lg:w-2/5 m-4 lg:m-12 lg:mx-24' type="text" placeholder='Search for a country...' />

            <select onChange={(e) => {SetRegion(e.target.value)}} className='rounded bg-vdb2 p-4 m-4 lg:m-12 lg:mx-20' placeholder='Filter By Region' name="" id="">
                <option value="" disabled selected hidden>Filter By Region</option>
                <option value="ALL">ALL</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Ocenia</option>
            </select> 
        </div>
    )
}

export default SearchFilter
