import logo from "../assets/images/logo.svg";

import React from "react";


interface LogoProps {
  className?: string; 
}

const Logo: React.FC<LogoProps> = ({ className }) => {

  return <img src={logo} alt="jobify" className={className} />;
};

export default Logo;
