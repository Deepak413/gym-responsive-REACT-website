import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id='header' className='' style={{backgroundImage: `url(${props.imgsrc})`}}>
        <div className="">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 common_page_container">
                  <h3>{props.headingsm}</h3>
                  <h1 className='my-3'><strong className='brand-name'>{props.headinglg1}</strong>{props.headinglg2}</h1>
                  <p>{props.para}</p>
                  <div className="mt-3">
                    <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;