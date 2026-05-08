import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ background: 'linear-gradient(90deg, #5c7cfa 0%, #2b6cb0 100%)', padding: '1rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ color: 'white', fontWeight: '700', letterSpacing: '0.05em', fontSize: '1.1rem' }}>
          My App
        </div>

        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {['/', '/users', '/todo', '/form', '/Posts'].map((path, index) => {
            const label = path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)
            return (
              <li key={index}>
                <Link
                  to={path}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.55rem 1rem',
                    borderRadius: '999px',
                    transition: 'background 0.2s ease, transform 0.2s ease',
                    background: 'rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
