import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className='bg-[#f5f5f5] min-h-screen'>
        <Outlet />
      </main>
    </>
  )
}

export default App
