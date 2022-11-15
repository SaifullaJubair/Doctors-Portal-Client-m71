import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
   return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
         <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
               <img
                  src={chair}
                  alt="Dentist Chair"
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
               />
               <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
               >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
               </svg>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2 mx-auto">

               <div>
                  <DayPicker
                     mode='single'
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                  ></DayPicker>
               </div>

               {/* <div className="mx-auto lg:mx-4 my-6 text-secondary">
                  <p>You have selected data: {format(selectedDate, "PP")} </p>

               </div> */}
            </div>
         </div>
      </div>
   );
};

export default AppointmentBanner;