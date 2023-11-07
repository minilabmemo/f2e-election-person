import React, { useEffect, useState } from 'react';

import brand from "../assets/images/brand.svg"
import icon_fb from "../assets/images/icon_fb.svg"
import icon_yt from "../assets/images/icon_yt.svg"
import icon_ig from "../assets/images/icon_ig.svg"

import "./header.scss";



export const Header = () => {



  return (
    <div className='header  p-tb-12 p-lr-48'>
      <div className='head  p-tb-12 p-lr-48'>
        <div className="logo-block"><img src={brand} alt="brand" /></div>
        <div className='nav-block'>
          <a className="nav link m-lr-8 p-8" href="#policy"> 候選人主張</a>
          <a className="nav link m-lr-8 p-8" href="#policy">最新活動</a>
          <a className="nav link m-lr-8 p-8" href="#policy">政策議題</a>
          <a className="nav link m-lr-8 p-8" href="#policy">小額捐款</a>
          <a className="nav link m-lr-8 p-8" href="#policy">民眾服務信箱</a>
        </div>
        <div className='social-block'>
          <img src={icon_fb} alt="icon_fb" className="social-icon" />
          <img src={icon_ig} alt="icon_ig" className="social-icon" />
          <img src={icon_yt} alt="icon_yt" className="social-icon" />
        </div>

      </div>

    </div>
  );
};
