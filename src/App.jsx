import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import { useQuery } from '@tanstack/react-query'
import AppsContext from './context/AppsContext';

function App() {
  const {data: apps, isLoading, error}=useQuery({
    queryKey: ['apps'],
    queryFn: ()=> fetch("apps.json").then(res=>res.json())
  });
  if(isLoading) return <p>Loading...</p>
  if(error) return <p className='text-red font-bold'>{error.message}</p>
  return (
    <AppsContext.Provider value={{apps}}>
      <Navbar />
      <main className='bg-[#f5f5f5] min-h-screen'>
        <Outlet />
      </main>
    </AppsContext.Provider>
  )
}

export default App
