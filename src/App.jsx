import { Outlet, useLocation } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AppsContext } from './useContexts/AppsContext'
import { useEffect, useState } from 'react'
import { useScrollToTop } from './customHooks/useScrollToTop'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const location =useLocation()
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animation happens once
      easing: "ease-in-out",
    });
  }, []);
   useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  useScrollToTop()
  const [sortBy, setSortBy] = useState("size");
  const [sortOrder, setSortOrder] = useState("Desc");
  const installationKey = "installed_ids";
  const [installedIDs, setInstalledIDs] = useState(() => {
    try {
      const installedStorageIDs = localStorage.getItem(installationKey);
      return installedStorageIDs ? JSON.parse(installedStorageIDs) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem(installationKey, JSON.stringify(installedIDs))
  }, [installedIDs, installationKey])
  const value = { installedIDs, setInstalledIDs, installationKey, sortBy, setSortBy, sortOrder, setSortOrder }
  return (
    <AppsContext.Provider value={value}>
      <Navbar />
      <main className='bg-[#f5f5f5] min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </AppsContext.Provider>
  )
}

export default App
