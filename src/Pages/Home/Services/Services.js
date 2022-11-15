import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {

   const servicesData = [
      {
         id: 1,
         name: "Fluoride Treatment",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur.",
         img: fluoride
      },
      {
         id: 2,
         name: "Cavity Filling",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur.",
         img: cavity
      },
      {
         id: 3,
         name: "Teeth Filling",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur.",
         img: whitening
      },
   ]
   console.log(servicesData.id);
   return (
      <div className='mt-14'>
         <div className='text-center my-4'>
            <h2 className='my-4 font-bold text-2xl text-primary uppercase'>Our Services</h2>
            <h1 className='font-bold text-3xl '>Services We Provide</h1>
         </div>
         <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            data-aos="fade-up"
            data-aos-duration='1500' >
            {
               servicesData.map(service => <Service
                  key={service.id}
                  service={service}></Service>)
            }
         </div>
      </div>
   );
};

export default Services;