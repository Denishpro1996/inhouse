import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import "./Client.css";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState ,useEffect} from "react";



const Client = () => {
  const [show,setShow]=useState([]);

console.log(show)
  const tableData = async () => {  //Get Data Api
    try {
      const resp = await fetch("http://192.168.1.96:4500/client/show");
      const actualData = await resp.json();
      setShow(actualData);
    } catch (err) {}
  };
  useEffect(() => {
    tableData();
  }, []);

console.log(show)
  
  return (
<>
<div className="Client_parent"> 
<div className="client_clild">
      {show.map((currValue) => {
       
       console.log(show)

        return (
          <div className="ultra_main_card_components">
            <Link to="/marketing/client/clientdetails" id="link" state={{data:currValue}}>
              <div className="main_card_components">
                <div className="card_header_components">
                  <div className="card_left">
                    <h2>{currValue.clientid}</h2>
                  </div>
                  <div className="card_right"></div>
                </div>
                <div className="card_body_components">
                  <div className="card_img_name">
                    <div className="card_clint_image">
                      <img className="round" src={currValue.addprofilepicture} alt="" />
                    </div>
                    <div className="card_clint_name">
                      <h2>{currValue.firstname} {currValue.lastname}</h2>
                    </div>
                    <div className="card_clint_email">
                      <EmailIcon />
                      <p>{currValue.email}</p>
                    </div>
                    <div className="card_clint_phone">
                      <PhoneIcon />
                      <p>{currValue.phonenumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      </div>
      </div>
    </>
  );
};

export default Client;
