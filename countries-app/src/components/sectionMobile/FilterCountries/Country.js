import React from 'react'

const Country = (props) => {
    console.log(props.country);

    return (
        <div className='cart w-80 m-6 bg-vdb2 rounded-md lg:m-12 '>
            <img src={props.country.flag} className='rounded-md object-cover w-full h-48 ' alt="" />
            <div className='p-8'>
            <h1 className='font-bold mb-3'>
                {props.country.name}
            </h1>
                <p className='mb-1'>Population: <span className='color-gray'> &nbsp; { props.country.population.toLocaleString() } </span> </p>
                <p className='mb-1'>Region: <span className='color-gray'>  &nbsp; {props.country.region} </span> </p>
                <p className='mb-1'>Capital: <span className='color-gray'>  &nbsp; {props.country.capital} </span> </p>
            </div>
            
        </div>
    )
}

export default Country
