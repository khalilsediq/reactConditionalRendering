import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Users from './Pages/Users.jsx'
import Todo from './Pages/Todo.jsx'
import Form from './Pages/Form.jsx'
import Posts from './Pages/Posts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'todo',
        element: <Todo />,
      },
      {
        path: 'form',
        element: <Form />,
      },
      {
        path: 'Posts',
        element: <Posts/>
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
