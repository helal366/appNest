import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AppsContext } from './useContexts/AppsContext'
import { useEffect, useState } from 'react'

function App() {
  const installationKey="installed_ids";
  const [installedIDs, setInstalledIDs]=useState(()=>{
    try {
      const installedStorageIDs = localStorage.getItem(installationKey);
      return installedStorageIDs ? JSON.parse(installedStorageIDs) : [];
    } catch{
      return [];
    }
  });
  useEffect(()=>{
        localStorage.setItem(installationKey, JSON.stringify(installedIDs))
    },[installedIDs, installationKey])
  return (
    <AppsContext.Provider value={{installedIDs, setInstalledIDs, installationKey }}>
      <Navbar />
      <main className='bg-[#f5f5f5] min-h-screen'>
        <Outlet />
      </main>
      <Footer/>
    </AppsContext.Provider>
  )
}

export default App
