import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import RecomendedVideos from './components/RecomendedVideos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className="app_page">
        <SideBar/>
        <RecomendedVideos/>
      </div>
    </>
  )
}

export default App
