import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const PrivateRoute = ({ children }) => {
    let { signedInUser, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center h-screen items-center'>
            <span className='text-6xl'>Loading...</span>
        </div>
    }
    if (signedInUser) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;