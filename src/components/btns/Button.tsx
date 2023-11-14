import React, { ReactNode } from 'react';
import "./Button.scss";
import { Arrow } from '../icons/Svg';
interface ButtonProps {
  className: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children }: ButtonProps) => {
  return (
    <button className={`${className} btn`}>{children}
      <div className="icon-wrap">   <Arrow className={className} /></div>

    </button >
  );
};

export default Button;
