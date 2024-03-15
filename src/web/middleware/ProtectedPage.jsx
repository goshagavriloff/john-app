import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../store/auth/authSlice';
import useAuthAccessTokenGuard from './useAuthAccessTokenGuard';
import useAuthRefreshTokenGuard from './useAuthRefreshTokenGuard';


const ProtectedPage = ({Component}) => {
    const accessToken=useSelector(selectCurrentToken);
    useAuthAccessTokenGuard();
    useAuthRefreshTokenGuard();
    
    return accessToken&&Component;
}

export default ProtectedPage