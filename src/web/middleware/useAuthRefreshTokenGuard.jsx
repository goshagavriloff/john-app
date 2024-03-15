import  { useEffect } from 'react'
import { useSelector } from "react-redux";
import { selectCurrentRefreshToken } from '../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const useAuthRefreshTokenGuard = () => {
  const refreshToken=useSelector(selectCurrentRefreshToken);
  
   const navigate = useNavigate();

   useEffect(() => {
       if (refreshToken===null) {
           navigate("/john-app/login");
       }
   }, [refreshToken,navigate]);
}

export default useAuthRefreshTokenGuard