// import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
// import { Toggle } from './component/Toggle.jsx'
import './Navbar.css';
import Toggle from '../Toggle';

const Navbar = () => {
  // const [Text, setText] = useState('Task')


  return (
    <nav>
      <Link to="/" className='title'>Task</Link>
      <ul>
        <li>
          <NavLink to="/toggle">Toggle</NavLink>
        </li>
        <li><NavLink to="/form">Form</NavLink></li>
        <li><NavLink to="/todolist">TodoList</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
