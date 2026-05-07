import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/todo'>Todo</Link>
        </li>
        <li>
          <Link to='/form'>Form</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
