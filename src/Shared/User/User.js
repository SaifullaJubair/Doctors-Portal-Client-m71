import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const User = () => {
   const { user } = useContext(AuthContext)
   return (
      <div>
         name: {user?.displayName}
      </div>
   );
};

export default User;