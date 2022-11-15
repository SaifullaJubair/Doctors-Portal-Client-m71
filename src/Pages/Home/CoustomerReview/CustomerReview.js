import React from 'react';

const CustomerReview = ({ review }) => {
   const { id, img, name, message, place } = review
   return (
      <div>

         <section>

            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10"
               data-aos="zoom-in"

               data-aos-duration="1500">
               <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                     <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                           <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                           <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>{message}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                           <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                           <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                     </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gradient-to-r from-primary to-secondary ">
                     <img src={img} alt="" className="w-16 h-16 mb-2 border-violet-600 -mt-16 bg-center bg-cover rounded-full border-2 dark:bg-gray-500 dark:bg-gray-700" />
                     <p className="text-xl font-semibold leading-tight ">Distinctio Animi</p>
                     <p className="text-xs uppercase italic  dark:text-gray-900">{place}</p>
                  </div>
               </div>
            </div>
         </section>

      </div >
   );
};

export default CustomerReview;