import React from 'react'
import { NavLink } from 'react-router-dom'
import useRefreshToken from '../web/middleware/useRefreshToken';


const Home = () => {
  useRefreshToken();

  return (
    <div>
      Home
        <NavLink to="/john-app/profile" >Профиль</NavLink>

    </div>
  )
}

export default Home