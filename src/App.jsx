import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import AppsContext from './context/AppsContext';
import Loading from './components/Loading';
// import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

function App() {
  // const [apps, setApps] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError]=useState("");
  // useEffect(() => {
  //   try {
  //     fetch("/apps.json").then(res => res.json())
  //       .then(data => setApps(data))
  //   } catch (error) {
  //     setError(error?.message)
  //   }finally{
  //     setLoading(false)
  //   }

  // }, []);
  // if (!apps || loading) return <Loading />
  // if(error) {
  //   return (
  //     <div className='text-red-500 font-bold'>
  //       <p>Something went wrong!!!</p>
  //       <p>{error}</p>
  //     </div>
  //   )
  // }
  const {data: apps, isLoading, error}=useQuery({
    queryKey: ['apps'],
    queryFn: ()=> fetch("/apps.json").then(res=>res.json()),
    staleTime: 1000 *60 *5,
  });
  if(isLoading) return <Loading/>
  if(error) {
    return (
      <div className='text-red-500 font-bold text-center spacy-y-0 pb-40'>
        <p>Something went wrong!!!</p>
        <p>{error?.message}</p>
      </div>
    )
  }


  return (
    <AppsContext.Provider value={{ apps: apps || [] }}>
      <Navbar />
      <main className='bg-[#f5f5f5] min-h-screen'>
        <Outlet />
      </main>
    </AppsContext.Provider>
  )
}

export default App
