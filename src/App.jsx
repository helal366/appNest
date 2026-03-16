import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AppsContext } from './useContexts/AppsContext'
import { useState } from 'react'

function App() {
  const [installedIDs, setInstalledIDs]=useState([]);
  return (
    <AppsContext.Provider value={{installedIDs, setInstalledIDs}}>
      <Navbar />
      <main className='bg-[#f5f5f5] min-h-screen'>
        <Outlet />
      </main>
      <Footer/>
    </AppsContext.Provider>
  )
}

export default App
