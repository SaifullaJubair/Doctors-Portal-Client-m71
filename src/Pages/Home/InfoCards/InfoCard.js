import React from 'react';

const InfoCard = ({ card }) => {
   const { name, description, icon, bgClass } = card

   return (
      <div className='m-6'>
         <div className={`card text-white lg:card-side shadow-xl ${bgClass} p-6`}>
            <figure>
               <img src={icon} alt="Album" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{name}</h2>
               <p>{description}</p>

            </div>
         </div>
      </div>
   );
};

export default InfoCard;