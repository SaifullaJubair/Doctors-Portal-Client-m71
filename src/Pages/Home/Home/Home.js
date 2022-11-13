import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import CustomersReviews from '../CoustomerReview/CustomersReviews';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Talk from '../Talk/Talk';
import HoverCard from './HoverCard/HoverCard';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <InfoCards></InfoCards>
         <Services></Services>
         <Care></Care>
         <MakeAppointment></MakeAppointment>
         <CustomersReviews></CustomersReviews>
         <HoverCard></HoverCard>
         <Talk></Talk>


      </div>
   );
};

export default Home;