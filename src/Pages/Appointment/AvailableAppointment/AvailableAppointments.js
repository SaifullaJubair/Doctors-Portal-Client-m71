import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
   const [appointmentOptions, setAppointmentOptions] = useState([]);
   const [treatment, setTreatment] = useState(null);
   useEffect(() => {
      fetch('appointmentOptions.json')
         .then(res => res.json())
         .then(data => setAppointmentOptions(data))
   }, [])
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
            ></BookingModal>}
      </section>
   );
};

export default AvailableAppointments;