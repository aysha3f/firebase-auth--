import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/LayOuts/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Log In/Login.jsx';
const router = createBrowserRouter([
  {
   path: '/',
   Component:Root,
   children:[
{index: true, 
  Component: Home
},
{
path: 'Login',
Component:Login
}
   ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
