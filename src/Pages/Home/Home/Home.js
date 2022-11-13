import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import HoverCard from './HoverCard/HoverCard';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <InfoCards></InfoCards>
         <Services></Services>
         <Care></Care>
         <MakeAppointment></MakeAppointment>
         <HoverCard></HoverCard>

      </div>
   );
};

export default Home;