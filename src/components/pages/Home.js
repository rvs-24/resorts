import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import {Link} from 'react-router-dom';
import Services from '../services';
import FeaturedRooms from '../FeaturedRooms';
//import '.../App.css';

const Home = ()=>{
  return(<>
      <Hero >
        <Banner title="luxurious rooms"
          subtitle="delux rooms starting at $299">
             <Link to="/rooms" className="btn-primary">OUR ROOMS</Link>
             
        </Banner>
        </Hero>
        <Services> </Services>
        <FeaturedRooms/>
        </>
  );
};

export default Home; 