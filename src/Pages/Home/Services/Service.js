import React from 'react';

const Service = ({ service }) => {
   const { description, name, img } = service
   return (
      <div className='m-6'>
         <div className="card lg:card-side  shadow-xl p-6">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
               <h2 className="card-title text-primary font-bold">{name}</h2>
               <p>{description} </p>

            </div>
         </div>
      </div>
   );
};

export default Service;