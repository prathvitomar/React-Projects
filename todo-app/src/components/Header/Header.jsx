import React from 'react'
import Logo from '../Logo'
import LogoutBtn from '../buttons/LogoutBtn'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
        name : 'Home',
        slug : '/',
        active : true
    },
    {
        name : 'Log In',
        slug : '/login',
        active : authStatus
    },
    {
        name : 'Sign Up',
        slug : '/sign-up',
        active : authStatus
    },
    {
        name : 'Add Blog',
        slug : '/add-blog',
        active : !authStatus
    },
    {
        name : 'Blogs',
        slug : '/blogs',
        active : !authStatus
    },
]


  return (
    <header className='py-3 shadow bg-gray-500'>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
    </header>
  )
}

export default Header