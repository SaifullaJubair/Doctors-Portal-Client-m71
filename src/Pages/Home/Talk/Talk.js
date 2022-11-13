import React from 'react';
import PrimaryButton from '../../../components/Button/PrimaryButton';

const Talk = () => {
   return (

      <div className="grid max-w-screen grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 m">
         <div className="mx-auto">
            <div className="space-y-2">
               <h2 className="text-4xl font-bold leading-tight text-ce lg:text-5xl text-primary">Let's talk!</h2>
               <div className="dark:text-gray-400 ">Stay Connected.</div>
            </div>
            <img src="https://www.mambaui.com/assets/svg/doodle.svg" alt="" className=" h-52 md:h-64 mt-6" />
         </div>
         <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
               <label for="name" className="text-lg">Full name</label>
               <input id="name" type="text" placeholder="" className="w-full p-3 rounded border dark:bg-gray-800" />
            </div>
            <div>
               <label for="email" className="text-lg">Email</label>
               <input id="email" type="email" className="w-full p-3 rounded border dark:bg-gray-800" />
            </div>
            <div >
               <label for="message" className="text-lg">Message</label>
               <textarea id="message" rows="3" className="w-full p-3 mb-6 border rounded dark:bg-gray-800"></textarea>
            </div>
            <PrimaryButton>Submit</PrimaryButton>
         </form>
      </div>
   );
};

export default Talk;