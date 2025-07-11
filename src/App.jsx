import Web3Provider from './contexts/Web3Provider'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import  './App.css'


function App() {
  console.log(" in the App")
   return (
    <>
      <Web3Provider>
        <RouterProvider router={routes}></RouterProvider>
      </Web3Provider>
    </>
  )
}

export default App
