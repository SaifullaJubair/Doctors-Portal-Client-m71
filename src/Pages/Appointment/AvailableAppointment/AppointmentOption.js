import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
   const { name, price, slots } = appointmentOption
   return (
      <div>
         <div className="card w-full lg:w-96 bg-base-100 shadow-xl my-4 mx-auto">
            <div className="card-body text-center">
               <h2 className="text-3xl font-bold text-secondary">{name}</h2>
               <p>
                  {slots.length > 0 ? slots[0] : 'Try Another Day'}
               </p>
               <p>
                  {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.
               </p>
               <p className='font-semibold'>Price: ${price}</p>
               <div className="card-actions justify-center">

                  <label
                     disabled={slots.length === 0}
                     htmlFor="booking-modal"
                     className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white mt-4"
                     onClick={() => setTreatment(appointmentOption)}>

                     Book Appointment
                  </label>


               </div>
            </div>
         </div>
      </div >
   );
};

export default AppointmentOption;