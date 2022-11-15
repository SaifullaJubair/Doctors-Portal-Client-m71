import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
   const { name, slots } = treatment
   const handleBooking = event => {
      event.preventDefault()
      const form = event.target;
      const date = form.date.value;
      const slot = form.slot.value;
      const patient = form.patient.value;
      const email = form.email.value;
      const phone = form.phone.value;

      const booking = {
         appointmentDate: date,
         treatment: name,
         patient,
         slot,
         email,
         phone,
      }
      //todo : send data to the server
      //and once data is saved then close the modal
      //and display success toast
      console.log(booking);
      setTreatment(null)
   }
   return (
      <>
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
               <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 className="text-lg font-bold">{name}</h3>

               <form onSubmit={handleBooking}>
                  <input type="text" readOnly value={format(selectedDate, "PP")} className="input bg-base-200 input-border my-2 input-primary w-full " name='date' />
                  <select className="select select-primary w-full my-2 " required name='slot'>
                     {
                        slots.map((slot, index) => <option
                           value={slot}
                           key={index}
                        >{slot}</option>)
                     }
                  </select>
                  <input type="text" placeholder="Your required Name" className="input input-bordered my-2 input-primary w-full " required name='patient' />

                  <input type="email" placeholder="Your Email" className="input input-bordered my-2 input-primary w-full " required name='email' />


                  <input type="number" placeholder="Your mobile number" className="input input-bordered my-2 input-primary w-full " required name='phone' />

                  <input type="submit" className='bg-gradient-to-r from-primary to-secondary my-2 p-2 rounded-lg text-white font-bold text-lg text-center w-full ' value="Submit" />
               </form>

            </div>
         </div>
      </>
   );
};

export default BookingModal;