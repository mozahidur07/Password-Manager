import React from 'react'
import '../navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar bg-purple-200 flex justify-between'>
      <div className="mainlogo ml-4 p-3">
        <a href='/'>Password <span className='text-purple-500'>Saver</span></a>
      </div>
      <ul className='right-containt mr-4 '>
        <li className='content p-4'>
          <a href='/'>Home</a>
          <a href='/faq'>FAQ</a>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
