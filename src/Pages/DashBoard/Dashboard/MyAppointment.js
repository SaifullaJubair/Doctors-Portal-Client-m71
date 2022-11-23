import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {
   const { user } = useContext(AuthContext)
   const url = `http://localhost:5000/bookings?email=${user?.email}`
   const { data: bookings = [] } = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn: async () => {
         const res = await fetch(url, {
            headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
         });
         const data = await res.json();
         return data

      }
   })
   return (
      <div>
         <h3 className="text-3xl font-bold my-5">My Appointment</h3>

         <div className="overflow-x-auto">
            <table className="table w-full">

               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Treatment</th>
                     <th>Date</th>
                     <th>Time</th>
                     <th>Payment</th>
                  </tr>
               </thead>
               <tbody>

                  {
                     bookings.length > 0 &&
                     bookings?.map((booking, i) => <tr key={booking._id}>
                        <th>{i + 1}</th>
                        <td>{booking.patient}</td>
                        <td>{booking.treatment}</td>
                        <td>{booking.appointmentDate}</td>
                        <td>{booking.slot}</td>
                        <td>
                           {
                              booking.price && !booking.paid && <button className='btn btn-primary btn-sm'>Pay</button>
                           }
                           {
                              booking.price && booking.paid && <span className='text-success'>Paid</span>
                           }
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyAppointment;