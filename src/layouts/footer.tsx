import React, { useEffect, useState } from 'react';

import logo from "../assets/images/logo.svg"
import "./Footer.scss";
import { person_name, person_number } from '../utils/const_config';
import icon_fb from "../assets/images/icon_fb.svg"
import icon_yt from "../assets/images/icon_yt.svg"
import icon_ig from "../assets/images/icon_ig.svg"


export const Footer = () => {

  return (

    <footer className='bg-orange ' >
      <div className="left">
        <div className="tag-person-small">
          <div className="number m-r-8">{person_number}</div>
          <div className="name">{person_name}</div>
        </div>
        <div className='social-block'>
          <div className="circle-icon"><img src={icon_fb} alt="icon_fb" className="social-icon" /></div>
          <div className="circle-icon">  <img src={icon_ig} alt="icon_ig" className="social-icon" /></div>
          <div className="circle-icon">  <img src={icon_yt} alt="icon_yt" className="social-icon" /></div>
        </div>

        <div className="copyright">© 2023 喵立翰 Miao Li-Han 版權所有</div>
      </div>

      <div className="right">
        <h5 className='title'>競選總部</h5>
        <div className="infos">
          <div className="text">辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</div>
          <div className="text">電話：(02) 888-5678</div>
          <div className="text">電子郵件地址：meowoffice@linmeow.tw</div>
        </div>
      </div>

    </footer>

  );
};
