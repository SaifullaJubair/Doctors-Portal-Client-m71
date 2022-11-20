import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
   return (
      <div className='flex justify-center'>
         Loading<InfinitySpin></InfinitySpin>
      </div>
   );
};

export default Loading;