import  { useEffect } from 'react'

import { useSelector } from "react-redux";
import { selectCurrentToken } from '../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const useAuthAccessTokenGuard = () => {
  
  const accessToken=useSelector(selectCurrentToken);

  const navigate = useNavigate();

    useEffect(() => {
        if (accessToken===null) {
            navigate("/john-app/login");
        }
    }, [accessToken,navigate]);

}

export default useAuthAccessTokenGuard