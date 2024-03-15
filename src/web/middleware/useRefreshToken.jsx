import { useEffect } from 'react';
import { selectCurrentRefreshToken } from '../../store/auth/authSlice';
import { useSelector } from 'react-redux';
import { userService } from '../fakeapi/user/UserService';

const useRefreshToken = () => {
    const refreshToken=useSelector(selectCurrentRefreshToken);
    useEffect(()=>{
        
        if (refreshToken!==null){
            userService.updateTokens(refreshToken);
        }

    },[refreshToken]);

}

export default useRefreshToken