import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import  logo from '../../../Image/logo.png'
import './ClientDetails.css'


const ClintDetails = () => {

const location = useLocation()
console.log("Client",location)
  return (
    <>
      <div className="clintCardDetailsContainer">
        <div className="clintInnerDetailsContainer">
          <div className="PhotoValaContainer">
            <div className="potokibaju">
              <img src={location.state.data.addprofilepicture} alt="img" className="round" />
            </div>
            <div className="clinetkafullname">
              <h2>{location.state.data.firstname} {location.state.data.lastname} </h2>
              <p>{location.state.data.clientid}</p>
              <small>{location.state.data.location}</small>
            </div>
          </div>
          <div className="gmaileSkypervalaContainer">
            <div className="left_Side_Container1">
              <EmailIcon/> <span>{location.state.data.email}</span>  
            </div>
            <div className="right_Side_Container1">
              {location.state.data.skypeid}
            </div>
            <div className="left_Side_Container2">
              <PhoneIcon/>  {location.state.data.phonenumber}
            </div>
            <div className="right_Side_Container2">
            <LinkedInIcon/> {location.state.data.linkdin}
            </div>
          </div>
          <div className="compneyDetailsvalaContainer">
            <h2 style={{ marginTop: 20 }}> Details</h2>
            <div className="compneyDetails_inner">
              <div className="compneyDetails_inner_left_side">
                <img src={logo} alt="logo" className="LBH" />
              </div>
              <div className="compneyDetails_inner_right_side">
                <h3>{location.state.data.company}</h3>
                 <h4>Company Id</h4> 
              </div>
            </div>
          </div>
          <div className="websitelinkvalaContainer">
            <div className="first_layer">
              <div className="innerfirst_layer_left"><EmailIcon/> {location.state.data.email}</div>
              <div className="innerfirst_layer_right"><LinkedInIcon/>{location.state.data.linkdin}</div>
            </div>
            <div className="websitelinkvalaContainer_phone"> <PhoneIcon/> {location.state.data.phonenumber}</div>
            <div className="websitelinkvalaContainer_website"><LanguageIcon/>website link</div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default ClintDetails;
