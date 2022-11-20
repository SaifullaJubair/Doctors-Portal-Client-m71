import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'

import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Context/AuthProvider';

const AdminRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const [isAdmin, isAdminLoading] = useAdmin(user?.email)
   const location = useLocation()
   if (loading || isAdminLoading) {
      return <div className='flex items-center min-h-screen justify-center'>
         <p className='flex items-center text-5xl font-bold'>L<ColorRing className="w-1/2"></ColorRing>admin</p>
      </div>
   };
   if (user && isAdmin) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
export default AdminRoute;