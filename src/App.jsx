import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Side from './Components/Side'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
