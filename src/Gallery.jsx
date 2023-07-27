import React from 'react';
import galleryImage1 from './images/gallery1.jpg';
import galleryImage2 from './images/gallery2.jpg';
import galleryImage3 from './images/gallery3.jpg';
import galleryImage4 from './images/gallery4.jpg';
import galleryImage5 from './images/gallery5.jpg';

const Gallery = () => {
  return (
    <>
      <div className="gallery_container">
        <div className="gallery">
          <img src={galleryImage1} alt="galleryImage" />
          <img src={galleryImage2} alt="galleryImage" />
        </div>
        <div className="gallery">
          <img src={galleryImage3} alt="galleryImage" />
        </div>
        <div className="gallery">
          <img src={galleryImage4} alt="galleryImage" />
          <img src={galleryImage5} alt="galleryImage" />
        </div>
      </div>
    </>
  )
}

export default Gallery;