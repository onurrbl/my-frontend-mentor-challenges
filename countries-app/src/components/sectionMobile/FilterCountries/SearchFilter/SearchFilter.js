import React from 'react'

const SearchFilter = () => {
    return (
        <div className='flex flex-wrap justify-between'>
            <input className='rounded bg-vdb2 p-4 w-11/12 md:w-96 lg:w-2/5 m-4 lg:m-12 lg:mx-24' type="text" placeholder='Search for a country...' />

            <select className='rounded bg-vdb2 p-4 m-4 lg:m-12 lg:mx-20' placeholder='Filter By Region' name="" id="">
                <option value="" disabled selected hidden>Filter By Region</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">Ocenia</option>
            </select> 
        </div>
    )
}

export default SearchFilter
