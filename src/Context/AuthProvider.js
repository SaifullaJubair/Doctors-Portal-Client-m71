import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log("")
         setUser(currentUser)
      });
      return () => unSubscribe();
   }, [])


   const authInfo = {
      user,
      createUser,
      signIn
   }
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;