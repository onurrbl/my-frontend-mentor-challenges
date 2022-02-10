import React from 'react'
import Image from 'next/image'
import logo from './/../images/logo.svg'
import imgAvatar from './/../images/image-avatar.png'
const Navbar = () => {
  return (
    <nav className='flex'>
        <Image src={logo} alt='logo' width={120} height={20} className='al-self-center' ></Image>
        <ul>
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <Image alt='Avatar' src={imgAvatar} width={50} height={50} className='al-self-center'></Image>
    </nav>
  )
}

export default Navbar