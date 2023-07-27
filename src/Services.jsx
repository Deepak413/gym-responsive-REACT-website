import React from 'react';
import ServicesImage from './images/servicehome.jpg';
import Common from './Common';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
// import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';

const Services = () => {
  return (
    <>
      <Common
        headingsm="TRANSFORM YOUR"
        headinglg1="FITNESS"
        headinglg2=" JOURNEY"
        para="Checkout all the necessary details below!"
        imgsrc={ServicesImage}
        visit="/contact"
        btname="Contact Now"
      />
      <div className="service_container">
        <h1>FEATURES</h1>
        <div className="service_container_items">
          <div className="service_container_item">
            <div>
              <FitnessCenterIcon className='service_container_icon' style={{ fontSize: '100px', color:'red', marginBottom:'3rem' }}/>
            </div>
            <h3>Persnoal Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, veniam.</p>
          </div>
          <div className="service_container_item">
            <div>
              <PedalBikeIcon className='service_container_icon' style={{ fontSize: '100px', color:'red', marginBottom:'2rem' }}/>
            </div>
            <h3>Cardio Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, veniam.</p>
          </div>
          <div className="service_container_item">
            <div>
              <SportsMartialArtsIcon className='service_container_icon' style={{ fontSize: '100px', color:'red', marginBottom:'2rem' }}/>
            </div>
            <h3>Gymnastic</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, veniam.</p>
          </div>
          <div className="service_container_item">
            <div>
              <SelfImprovementIcon className='service_container_icon' style={{ fontSize: '100px', color:'red', marginBottom:'2rem' }}/>
            </div>
            <h3>Yoga Sessions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, veniam.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;