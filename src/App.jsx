import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import { useQuery } from '@tanstack/react-query'
import AppsContext from './context/AppsContext';
import Loading from './components/Loading';

function App() {
  const {data: apps, isLoading, error}=useQuery({
    queryKey: ['apps'],
    queryFn: ()=> fetch("/apps.json").then(res=>res.json()),
    staleTime: 1000 *60 *5,
  });
  if(isLoading) return <Loading/>
  if(error) return(
    <>
      <p className='text-red font-bold'>{error.message}</p>
      <p className='text-red-500 font-bold'>An unexpected error occurred</p>
    </>
  )
  return (
    <AppsContext.Provider value={{apps:apps || []}}>
      <Navbar />
      <main className='bg-[#f5f5f5] min-h-screen'>
        <Outlet />
      </main>
    </AppsContext.Provider>
  )
}

export default App
