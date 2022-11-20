import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
   const { name: treatmentName, slots } = treatment
   const date = format(selectedDate, 'PP')
   const { user } = useContext(AuthContext);
   const handleBooking = event => {
      event.preventDefault()
      const form = event.target;
      const slot = form.slot.value;
      const patient = form.patient.value;
      const email = form.email.value;
      const phone = form.phone.value;

      const booking = {
         appointmentDate: date,
         treatment: treatmentName,
         patient,
         slot,
         email,
         phone,
      }

      fetch('http://localhost:5000/bookings', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(booking)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.acknowledged) {
               toast.success('Booking Confirmed')
               refetch()
            }
            else {
               toast.error(data.message)
            }
         })


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
               <h3 className="text-lg font-bold">{treatmentName}</h3>

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
                  <input type="text" placeholder="Your required Name" className="input input-bordered my-2 input-primary w-full " disabled name='patient' defaultValue={user?.displayName} />

                  <input type="email" placeholder="Your Email" className="input input-bordered my-2 input-primary w-full " defaultValue={user?.email} required name='email' readOnly />


                  <input type="number" placeholder="Your mobile number" className="input input-bordered my-2 input-primary w-full " required name='phone' />

                  <input type="submit" className='bg-gradient-to-r from-primary to-secondary my-2 p-2 rounded-lg text-white font-bold text-lg text-center w-full ' value="Submit" />
               </form>

            </div>
         </div>
      </>
   );
};

export default BookingModal;