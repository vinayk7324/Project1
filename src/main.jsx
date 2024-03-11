import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './screens/comp/Home.jsx'
import MarsIntro from './screens/comp/MarsIntro.jsx'
import About from './screens/comp/About.jsx'
import Gallery from './screens/comp/Gallery.jsx'
import Projects from './screens/comp/Projects.jsx'
import TheTeam from './screens/comp/TheTeam';

const router  = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'/',
      element:<Home/>
    },
  {
    path:"marsintro",
    element:<MarsIntro/>


  },
{
  path:"about",
  element:<About/>
},
{
  path:"gallery",
  element:<Gallery/>
},
{
  path:"projects",
  element:<Projects/>
},
{
  path:"teams",
  element:<TheTeam/>
}]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
