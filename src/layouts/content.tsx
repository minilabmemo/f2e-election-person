import React, { useEffect, useState } from 'react';

import logo from "../assets/images/logo.svg"
import "./header.scss";



export const Content = () => {



  return (
    <>
      <div className='wrap'>
        <div className="logo-block"><img src={logo} alt="logo" /></div>
        <div className='nav-block'> </div>
        <div className='social-block'></div>

      </div>
    </>
  );
};
