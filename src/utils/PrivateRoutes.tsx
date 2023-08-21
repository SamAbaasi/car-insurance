import {Outlet, Navigate} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();
    return (
        isAuthenticated ? <Outlet/> : <Navigate to='/signup' />
    )
}

export default PrivateRoutes