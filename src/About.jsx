import React from 'react';
import AboutImage from './images/about.jpg';
import logo from './images/gymlogo.jpg';
import Common from './Common';
import { NavLink } from 'react-router-dom';
import trainer1 from './images/team1.jpg';
import trainer2 from './images/team2.jpg';
import trainer3 from './images/team3.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const About = () => {
  return (
    <>
      <Common
        headingsm="LEARN MORE"
        headinglg1="ABOUT"
        headinglg2=" US"
        para="Checkout all the necessary details below!"
        imgsrc={AboutImage}
        visit="/contact"
        btname="Contact Now"
      />

      <div className="about_container">
        <div className="about_container_card">
          <h1>OUR STORY</h1>
          <NavLink to="#" className='btn_about'>LEARN MORE</NavLink>
        </div>
        <div className="about_container_card">
          <h1>OUR MISSION</h1>
          <NavLink to="#" className='btn_about'>LEARN MORE</NavLink>
        </div>
        <div className="about_container_card">
          <h1>OUR TEAM</h1>
          <NavLink to="#" className='btn_about'>LEARN MORE</NavLink>
        </div>
      </div>
      <div className="about_story">
        <h1>THE MEANING BEHIND THE NAME D-Fitness</h1>
        <img src={logo} alt="Our Story" />
        <p>
          “Two common denominators in my life existed, FAITH and FITNESS. My life has been a journey of prioritizing
          these and daily surrendering my ego and flesh to not make fitness my idol. Having been immersed into CrossFit
          in 2009, I saw a community RIPE FOR THE GOSPEL. I looked into the stands in 2011 and God gave me incredible
          PASSION for this community. As I looked into the sea of people, I wondered which GOD does our CrossFit
          community worship, a god that will fail them, or a God that loves them so unconditionally that He would
          sacrifice his own son?”
        </p>
        <p>
          FLorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, nobis sequi iste enim ipsa nisi
          cupiditate incidunt illum facere vel at architecto, inventore eum? Eius, possimus accusantium quisquam
          alias velit aliquid dolor illo doloremque doloribus, atque quaerat optio aut a? Architecto iure
          voluptatem expedita minima perspiciatis impedit itaque voluptates saepe!F
        </p>
      </div>
      <div className="about_mission">
        <div className="about_mission_card">
          <h1>MISSION</h1>
          <p>Serve and strengthen the fitness community to live for Christ and share His love.</p>
        </div>
        <div className="about_mission_card">
          <h1>VISION</h1>
          <p>Growing God’s Kingdom through health & fitness.</p>
        </div>
      </div>
      <div className="about_team_container">
        <h1>Who we are</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus vel totam sapiente, consectetur, voluptatem sit repudiandae ipsa facere ea optio eligendi fugiat nobis dolorum sint recusandae, minima praesentium earum.</p>
        <div className="about_team">
          <div className="about_team_item">
            <img src={trainer1} alt="Trainer1" />
            <div className="team_social_icons">
              <NavLink to="https://www.instagram.com/" target="_blank"><InstagramIcon /></NavLink>
              <NavLink to="https://www.youtube.com/" target="_blank"><YouTubeIcon /></NavLink>
              <NavLink to="https://www.linkedin.com/" target="_blank"><LinkedInIcon /></NavLink>
              <NavLink to="https://www.facebook.com/" target="_blank"><FacebookIcon /></NavLink>
              <NavLink to="https://twitter.com/i/flow/login" target="_blank"><TwitterIcon /></NavLink>
            </div>
            <h3 className='name'>DEEPAK DHAKER</h3>
          </div>
          <div className="about_team_item">
            <img src={trainer2} alt="Trainer1" />
            <div className="team_social_icons">
              <NavLink to="https://www.instagram.com/" target="_blank"><InstagramIcon /></NavLink>
              <NavLink to="https://www.youtube.com/" target="_blank"><YouTubeIcon /></NavLink>
              <NavLink to="https://www.linkedin.com/" target="_blank"><LinkedInIcon /></NavLink>
              <NavLink to="https://www.facebook.com/" target="_blank"><FacebookIcon /></NavLink>
              <NavLink to="https://twitter.com/i/flow/login" target="_blank"><TwitterIcon /></NavLink>
            </div>
            <h3>MANISH SHARMA</h3>

          </div>
          <div className="about_team_item">
            <img src={trainer3} alt="Trainer1" />
            <div className="team_social_icons">
              <NavLink to="https://www.instagram.com/" target="_blank"><InstagramIcon /></NavLink>
              <NavLink to="https://www.youtube.com/" target="_blank"><YouTubeIcon /></NavLink>
              <NavLink to="https://www.linkedin.com/" target="_blank"><LinkedInIcon /></NavLink>
              <NavLink to="https://www.facebook.com/" target="_blank"><FacebookIcon /></NavLink>
              <NavLink to="https://twitter.com/i/flow/login" target="_blank"><TwitterIcon /></NavLink>
            </div>
            <h3>JULIE</h3>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;