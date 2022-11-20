import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Audio, ColorRing, InfinitySpin, TailSpin, Vortex } from 'react-loader-spinner'
import { AuthContext } from '../../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation()

   if (loading) {
      return <div className='flex items-center min-h-screen justify-center'>
         <p className='flex items-center text-5xl font-bold'>L<ColorRing className="w-1/2"></ColorRing>ading</p>
      </div>
   };
   if (user) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
export default PrivateRoute;