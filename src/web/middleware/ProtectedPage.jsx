import useAuthAccessTokenGuard from './useAuthAccessTokenGuard';
import useAuthRefreshTokenGuard from './useAuthRefreshTokenGuard';


const ProtectedPage = ({Component}) => {
    useAuthAccessTokenGuard();
    useAuthRefreshTokenGuard();
    return Component;
}

export default ProtectedPage