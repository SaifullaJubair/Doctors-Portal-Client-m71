import { useEffect, useState } from "react";

const useToken = email => {
   const [token, setToken] = useState('')
   console.log('Usetoken hit', email);
   useEffect(() => {
      console.log(email)
      if (email) {

         fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
               console.log(data)
               if (data.accessToken) {
                  localStorage.setItem('accessToken', data.accessToken);
                  console.log('AccessToken Found', data.accessToken);
                  setToken(data.accessToken);
               }
            })
            .catch(error => console.log(error))
      }
   }, [email]);
   return [token];
}

export default useToken