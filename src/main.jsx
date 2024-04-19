import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import SideComponent from './Components/SideComponent.jsx'
import Widhdraw from './Components/Widhdraw.jsx'
import Login from './Components/Login.jsx'
import Create from './Components/Create.jsx'
import Done from './Components/Done.jsx'
import DoneComponent from './Components/DoneComponent.jsx'
import Welcome from './Components/Welcome.jsx'
import Nav from './Components/Nav.jsx'
import Footer from './Components/Footer.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:
      [
        {
        path:"",
        element:<Login/>
        },
        {
        path:"login",
        element:<Login/>
        },
        {
          path:"detail",
          element:<SideComponent/>
        },
        {
          path:"withdraw",
          element:<Widhdraw/>
        }
        ,
        {
          path:"create",
          element:<Create/>
        }
      ]
  },
  {
          path:"done",
          element:<DoneComponent/>
  },
  {
    path:"/welcome",
    element :<><Nav/><Welcome/><Footer/></>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
