import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import AppsPage from './pages/AppsPage.jsx'
import InstallationPage from './pages/InstallationPage.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/apps', element: <AppsPage /> },
      { path: '/installation', element: <InstallationPage /> }
    ]
  }
]);
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
