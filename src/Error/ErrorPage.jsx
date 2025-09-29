import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h1>Error</h1>
      <NavLink to = "/">
        <button>Go To Home</button>
      
      </NavLink>
    </div>
  )
}

export default ErrorPage
