import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'

const App = () => {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <HomePage />
  }])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App