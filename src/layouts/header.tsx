import React, { useEffect, useState } from 'react';

import brand from "../assets/images/brand.svg"
import icon_fb from "../assets/images/icon_fb.svg"
import icon_yt from "../assets/images/icon_yt.svg"
import icon_ig from "../assets/images/icon_ig.svg"

import "./Header.scss";



export const Header = () => {



  return (
    <header className='header  p-y-12 p-x-48'>
      <div className='head  p-y-12 p-x-48'>
        <div className="logo-block"><img src={brand} alt="brand" /></div>
        <nav className="menu">
          <ul className='link-list'>
            <li className="link m-x-8 p-8"><a href="#idea"> 候選人主張</a></li>
            <li className="link m-x-8 p-8"><a href="#events">最新活動</a></li>
            <li className="link m-x-8 p-8"><a href="#policy">政策議題</a></li>
            <li className="link m-x-8 p-8"><a href="#others">小額捐款</a></li>
            <li className="link m-x-8 p-8"><a href="#others">民眾服務信箱</a></li>
          </ul>
        </nav>
        <div className='social-block'>
          <img src={icon_fb} alt="icon_fb" className="social-icon" />
          <img src={icon_ig} alt="icon_ig" className="social-icon" />
          <img src={icon_yt} alt="icon_yt" className="social-icon" />
        </div>

      </div>

    </header>
  );
};
