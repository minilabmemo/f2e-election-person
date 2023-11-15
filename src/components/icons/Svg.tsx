import React, { CSSProperties } from 'react';

interface IconProps {
  width?: string;
  height?: string;
  style?: CSSProperties | undefined;
  className: string;
}

export const Arrow: React.FC<IconProps> = ({ width, height, style, className }) => {
  return (

    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" style={style} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0.3125L21.6875 11L11 21.6875L9.125 19.8125L16.5625 12.3125H0.3125V9.6875H16.5625L9.125 2.1875L11 0.3125Z" />
    </svg>


  );
};

