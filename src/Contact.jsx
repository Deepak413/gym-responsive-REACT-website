import React, { useState } from 'react';
import ContactImage from './images/gymcontact.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setData({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    })
    alert(`My name is ${data.fullname} my phone number is ${data.phone}`);
  }

  return (
    <>
      <div className="contact_landing_page" style={{ backgroundImage: `url(${ContactImage})` }}>
        CONTACT US
      </div>
      <div className="contact_container">
        <div className='contact_details'>
          <h3>CONTACT US</h3>
          <h1>GET IN TOUCH</h1>
          <div className="contact_info">
            <div><LocationOnIcon className='contact_info_icon' style={{ width: '4rem', height: '4rem', padding: '14px', borderRadius: '50%', backgroundColor: 'rgb(115 115 115)', marginRight: '17px', color: 'red' }} /></div>
            <span>123 Whitefield, Banglore 311602</span>
          </div>
          <div className="contact_info">
            <div><CallIcon className='contact_info_icon' style={{ width: '4rem', height: '4rem', padding: '14px', borderRadius: '50%', backgroundColor: 'rgb(115 115 115)', marginRight: '17px', color: 'red' }} /></div>
            <span>99824***** | 63760*****</span>
          </div>
          <div className="contact_info">
            <div><EmailIcon className='contact_info_icon' style={{ width: '4rem', height: '4rem', padding: '14px', borderRadius: '50%', backgroundColor: 'rgb(115 115 115)', marginRight: '17px', color: 'red' }} /></div>
            <span>deepakdhaker*****@gmail.com</span>
          </div>
        </div>
        <div className='contact_form'>
          <form onSubmit={formSubmit}>
            <input type="text" placeholder='Name' name='fullname' value={data.fullname} onChange={inputEvent} />
            <input type="email" placeholder='Email' name='email' value={data.email} onChange={inputEvent} />
            <input type="phone" placeholder='Phone Number' name='phone' value={data.phone} onChange={inputEvent} />
            <textarea id="" cols="30" rows="10" placeholder='Message' name='msg' value={data.msg} onChange={inputEvent} ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;