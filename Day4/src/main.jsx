import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',     //(" / is top level element in it we do nesting")
    element:<Root/>,
     
    children:[
      { path:'/', element:<Home /> },
      { path:'/about', element:<About /> },
      { path:'/Contact', element:<Contact/> },
     ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
 <RouterProvider router={router} />
   </StrictMode>,
)
