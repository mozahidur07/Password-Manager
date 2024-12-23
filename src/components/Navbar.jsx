import React from 'react'
import '../navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar bg-purple-200 flex justify-between'>
      <div className="mainlogo ml-4 p-3">
        <a href='/'>Password <span className='text-purple-500'>Saver</span></a>
      </div>
      <ul className='right-containt'>
        <li className='content p-3 mx-4'>
          <a href='https://mozahidur.vercel.app/contact' target='_blank'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
