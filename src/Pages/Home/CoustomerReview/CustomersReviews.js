import React from 'react';
import CustomerReview from './CustomerReview';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const CustomersReviews = () => {
   const customersData = [
      {
         id: 1,
         name: "Winson Herry",
         message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
         img: people1,
         place: 'California',
      },
      {
         id: 2,
         name: "Winson Herry",
         message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
         img: people2,
         place: 'California',
      },
      {
         id: 3,
         name: "Winson Herry",
         message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
         img: people3,
         place: 'California',
      },
      {
         id: 4,
         name: "Winson Herry",
         message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
         img: people2,
         place: 'California',
      },
      {
         id: 5,
         name: "Winson Herry",
         message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
         img: people1,
         place: 'California',
      },
   ]
   return (
      <div className="my-8 dark:bg-gray-800 dark:text-gray-100 ">
         <div className="container flex flex-col items-center mx-auto mb-8 md:p-10 md:px-12">
            <h3 className='text-primary text-xl font-semibold mt-12'>Testimonial</h3>
            <h1 className="p-4 text-4xl font-semibold leading-none text-center">What Our Patients Says ! </h1>
         </div>
         <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {
               customersData.map(review => <CustomerReview
                  key={review.id}
                  review={review}></CustomerReview>)
            }
         </div>
      </div>
   );
};

export default CustomersReviews;