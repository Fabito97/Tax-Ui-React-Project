import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/home/Home'
import Feature from './components/features/Feature'
import Testimonials from './components/testimonial/Testimonials'
import Pricings from './components/pricing/Pricings'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [         
      {
        path: '/',
        element: <Home/>
      },       
      {
        path: 'feature',
        element: <Feature/>
      },
      {
        path: 'testimonial',
        element: <Testimonials/>
      },
      {
        path: 'pricing',
        element: <Pricings/>
      },
    ],
  }
  
])

export default function App() {

  return (
    <>
    <RouterProvider router={router} />      
    </>
  )
}



