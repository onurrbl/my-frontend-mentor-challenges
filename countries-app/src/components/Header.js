import React from 'react'

const Header = () => {
    return (
        <nav className='flex flex-row justify-between items-center  bg-vdb2 p-7' >
             <h1 className='font-bold lg:mx-20'>Where in the World?</h1>   
             <button className='lg:mx-20'> <i className="fas fa-moon"></i>Dark Mode </button>            
        </nav>
    )
}

export default Header
