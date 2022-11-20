import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
   // const [appointmentOptions, setAppointmentOptions] = useState([]);
   // useEffect(() => {
   //    fetch('http://localhost:5000/appointmentOptions')
   //       .then(res => res.json())
   //       .then(data => setAppointmentOptions(data))
   // }, [])

   const [treatment, setTreatment] = useState(null);
   const date = format(selectedDate, 'PP');
   const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
      queryKey: ['appointmentOptions', date],
      queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`, {
         headers: {
            authorization: `barer ${localStorage.getItem('accessToken')}`
         }
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            return data
         })
         .catch(err => console.log(err))
   })
   if (isLoading) {
      return <Loading></Loading>
   }

   return (
      <section>
         <p className='text-center text-lg font-bold text-primary'> Available Appointments on <span className='text-xl text-secondary'>{format(selectedDate, "PP")}</span> </p>

         <div className='grid gap-6 grid-cols-1 md:grid-cols-2-2 lg:grid-cols-3 my-16'>
            {
               appointmentOptions.map(option => <AppointmentOption
                  key={option._id}
                  setTreatment={setTreatment}
                  appointmentOption={option}
               ></AppointmentOption>)
            }
         </div>
         {
            treatment &&
            <BookingModal
               treatment={treatment}
               selectedDate={selectedDate}
               setTreatment={setTreatment}
               refetch={refetch}
            ></BookingModal>}
      </section>
   );
};

export default AvailableAppointments;