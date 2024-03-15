import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedPage from "./web/middleware/ProtectedPage";




const App=()=>{
  


  return (
      <Routes>
          <Route path="/john-app/login" element={<Login/>}/>
          <Route path="/john-app/register" element={<Register/>}/>
          <Route path="/john-app/profile" element={<ProtectedPage Component={<Profile/>}/>}/>
          <Route path="/john-app/*" element={<ProtectedPage Component={<Home/>}/>} />
      </Routes>
  )
}
export default App;
