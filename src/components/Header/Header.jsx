import React from "react";
import "./Header.scss";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../data/logo.png";
import { FaUniversity } from "react-icons/fa";

export default function Header() {
  return (
    <ReactNavbar
      logo={logo}
      logoWidth="270px"
      navColor1="white"
      navColor2="hsla(269, 100%, 10%, 1)"
      burgerColor="hsla(255, 80%, 49%, 0.76)"
      burgerColorHover="#af3dff"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="HOME"
      link2Text="SKILLS"
      link3Text="PROJECTS"
      link4Text="EXPERIENCE"
      link1Url="/"
      link2Url="/skills"
      link3Url="/projects"
      link4Url="/experience"
      link1ColorHover="white"
      link1Color="hsla(253, 100%, 55%, 0.91)"
      link1Size="1.55rem"
      link1Padding="3vmax"
      profileIconUrl="/university"
      profileIcon={true}
      ProfileIconElement={FaUniversity}
      profileIconColor="hsla(255, 80%, 49%, 0.76)"
      profileIconColorHover="white"
    />
  );
}
