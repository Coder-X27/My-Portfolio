import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from '../Assets/Images/logo2.png';
import { MdOutlineScreenShare } from "react-icons/md";
const Navbar = () => {
    
  return (
    <ReactNavbar
      navColor1="#293241ff"
      navColor2="#1d3557ff"
      burgerColor="crimson"
      burgerColorHover="#dc143c8f"
      logo={logo}
      logoWidth="350px"
      logoHoverColor="white"
      nav2justifyContent="space-between"
      nav3justifyContent="space-between"
      nav4justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Tech"
      link4Text="Projects"
      link1Url="/"
      link2Url="/About"
      link3Url="/Tech"
      link4Url="/Projects"
      link1ColorHover="crimson"
      link1Color="white"
      link1Size="2.5rem"
      link1Padding="1vmax"
      profileIcon={true}
      profileIconUrl='/Contact'
      ProfileIconElement={MdOutlineScreenShare}
      profileIconColor="white"
      profileIconColorHover="crimson"
    />
  );
};

export default Navbar;
