import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
    const { user } = useSelector((state) => state.user);
    return user?.role === 'agent' || user?.role === 'super-admin' ? (
        children
    ) : (
        <Navigate replace to='/login' />
    );
};

export default AdminPrivateRoute;