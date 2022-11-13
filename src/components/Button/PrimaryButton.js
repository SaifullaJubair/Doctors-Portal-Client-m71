import React from 'react';

const PrimaryButton = ({ children }) => {
   return (
      <button className='btn btn-primary  bg-gradient-to-r from-primary to-secondary my-4 text-white mt-5'>{children} </button>
   );
};

export default PrimaryButton;