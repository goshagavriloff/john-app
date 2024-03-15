import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedPage from "./web/middleware/ProtectedPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Works from "./pages/Works";




const App=()=>{
  


  return (
      <Routes>
          <Route path="/john-app/login" element={<Login/>}/>
          <Route path="/john-app/register" element={<Register/>}/>
          <Route path="/john-app/profile" element={<ProtectedPage Component={<Profile/>}/>}/>
          
          <Route path="/john-app/works" element={<ProtectedPage Component={<Works/>}/>}/>
          <Route path="/john-app/contact" element={<ProtectedPage Component={<Contact/>}/>}/>
          <Route path="/john-app/blog" element={<ProtectedPage Component={<Blog/>}/>}/>

          <Route path="/john-app/*" element={<ProtectedPage Component={<Home/>}/>} />
      </Routes>
  )
}
export default App;
