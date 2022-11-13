import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/Button/PrimaryButton';
const MakeAppointment = () => {
   return (
      <section className='mt-32'
         style={{
            background: `url(${appointment})`
         }}
      >
         <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
               <img src={doctor} className='lg:-mt-36 lg:-mb-4 lg:w-1/2 rounded-lg ' alt='' />
               <div>
                  <h3 className="text-2xl font-semibold text-secondary">Appointment</h3>
                  <span className='text-white'>
                     <h1 className=" text-4xl lg:text-5xl  font-bold py-6">Make an appointment Today</h1>
                     <p className='mb-4'><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</small></p>
                     <span>
                        <PrimaryButton>Appointment</PrimaryButton>
                     </span>
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MakeAppointment;