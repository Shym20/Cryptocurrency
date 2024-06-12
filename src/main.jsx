import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider,theme} from "@chakra-ui/react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Exchange from './Components/Exchange.jsx'
import Coin from './Components/Coin.jsx'
import CoinDetails from './Components/CoinDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path: "exchange",
        element: <Exchange/>
      },
      {
        path: "coins",
        element: <Coin/>
      },
      {
        path: "coindetails",
        element: <CoinDetails/>
      }
     /* {
        path: "github",
        element: <Github/>
      }*/
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    <RouterProvider router={router}/>
  </React.StrictMode>
  
)
export const server = `https://api.coingecko.com/api/v3`
