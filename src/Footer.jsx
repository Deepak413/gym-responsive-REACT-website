import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from './images/gymlogo.jpg';


const Footer = () => {
    return (
        <>
            <div className="footer_contact_info">
                <div className="footer_contact_card">
                    <div><LocationOnIcon className='footer_card_icon' style={{ width: '4rem', height: '4rem', padding: '14px', borderRadius: '50%', backgroundColor: 'rgb(29 29 29)', marginRight: '17px', color: 'red' }} /></div>
                    <span style={{ fontWeight: 'bold' }}>123 Whitefield, Banglore 311602</span>
                </div>
                <div className="footer_contact_card">
                    <div><CallIcon style={{ width: '4rem', height: '4rem', padding: '14px', borderRadius: '50%', backgroundColor: 'rgb(29 29 29)', marginRight: '17px', color: 'red' }} /></div>
                    <span style={{ fontWeight: 'bold' }}>99824***** | 63760*****</span>
                </div>
                <div className="footer_contact_card">
                    <div><EmailIcon style={{ width: '4rem', height: '4rem', padding: '14px', borderRadius: '50%', backgroundColor: 'rgb(29 29 29)', marginRight: '17px', color: 'red' }} /></div>
                    <span style={{ fontWeight: 'bold' }}>deepakdhaker*****@gmail.com</span>
                </div>
            </div>
            <div className="footer_container">
                <img src={logo} alt="Logo" />
                <div className="footer_links">
                    <NavLink className="nav-link active" aria-current="page" to="/"  onclick="scrollToTop()">Home</NavLink>
                    <NavLink className="nav-link active" aria-current="page" to="/services">Services</NavLink>
                    <NavLink className="nav-link active" aria-current="page" to="/gallery">Gallery</NavLink>
                    <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                    <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                </div>
                <div className="footer_social_links">
                    <NavLink to="https://www.instagram.com/" target="_blank"><InstagramIcon /></NavLink>
                    <NavLink to="https://www.youtube.com/" target="_blank"><YouTubeIcon /></NavLink>
                    <NavLink to="https://www.linkedin.com/" target="_blank"><LinkedInIcon /></NavLink>
                    <NavLink to="https://www.facebook.com/" target="_blank"><FacebookIcon /></NavLink>
                    <NavLink to="https://twitter.com/i/flow/login" target="_blank"><TwitterIcon /></NavLink>
                </div>
                <div className='footer_line'>Copyright ©2023 All rights reserved | Made with <FavoriteIcon style={{color:'red'}} /> by DEEPAK DHAKER</div>
            </div>
        </>
    );
}

export default Footer;