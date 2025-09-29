import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"
import ErrorPage from "./Error/ErrorPage"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Country from "./Pages/Country"
import CountryDetails from "./Pages/CountryDetails"

const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <AppLayout />,
      errorElement : <ErrorPage />,
      children : [
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/about',
          element : <About />
        },
        {
          path : '/contact',
          element : <Contact />
        },
        {
          path : '/country',
          element : <Country />
        },
        {
          path : '/country/:id',
          element : <CountryDetails />
        }
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
