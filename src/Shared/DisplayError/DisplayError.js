import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const DisplayError = () => {
   const error = useRouteError()
   const { logOut } = useContext(AuthContext)
   const navigate = useNavigate()
   const handleLogOut = () => {
      logOut()
         .then(() => {
            navigate('/login')
         })
         .catch(error => console.log(error))
   }
   return (
      <div>
         <p className='text-red-500 font-semibold'> Something went wrong!</p>
         <p className='text-red-400'> {error.statusText || error.message}</p>
         <h4>Please SignOut and SignIn again</h4>
         <button className='mx-2 lg:text-lg text-xs font-semibold nav' onClick={handleLogOut}> Logout</button>
      </div>
   );
};

export default DisplayError;