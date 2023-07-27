import React from 'react';
// import { NavLink } from 'react-router-dom';
import homeImage from './images/home.jpg';
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common 
        headingsm="STEP UP YOUR" 
        headinglg1="FITNESS" 
        headinglg2=" WITH US" 
        para="Build Your Body and Fitness With Professsional Touch" 
        imgsrc={homeImage}
        visit="/services"
        btname="Get Started"        
      />
      {/* <section id='header' className='' style={{backgroundImage: `url(${homeImage})`}}>
        <div className="">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h3>STEP UP YOUR</h3>
                  <h1 className='my-3'><strong className='brand-name'>FITNESS</strong> WITH US</h1>
                  <p>Build Your Body and Fitness With Professsional Touch</p>
                  <div className="mt-3">
                    <NavLink to="/services" className='btn-get-started'>Get Started</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;