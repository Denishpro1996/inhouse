import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Application from "../../marketing/Application";
import Inquiry from "../../Inquiry/Inquiry";
import SalesTable from "../../Sales/SalesTable";
import Client from "../../ClientCard/Client";
import ModualHeader from "../../config/ModuleHeader";
import ApplicationForm from "../../forms/marketingforms/ApplicationForm";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClientForm from "../../../components/forms/marketingforms/ClientForm";
import Inquiryform from "../../forms/marketingforms/Inquiryform";
import SalesForm from "../../forms/marketingforms/SalesForm";
import ClientDetails from "../../../components/ClientCard/ClientDetails";
import '../../../../styles/custom.css'
const Marketingnav = () => {
  const [navvalue, setNavValue] = useState(0);

  const [show, setShow] = useState(true);

  function handleTabChange(event, value) {
    setNavValue(value);
  }
  const addForm = () => {
    setShow(false);
  };
  return (
    <>
      <ModualHeader />
      <div className="xyz">     
      <div className="abc">
        {/* =================================Tabs========================================= */}
        <Tabs
          value={navvalue}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          style={{ margin: "1.25rem" }}
          classes={{ root: "w-full h-64 border-b-1" }}
        >
          {/* <div className="_tabs_btn">    ---------
          <div className="_tabs"> ------------ */}
         
              <Tab
                className="h-64"
                label="APPLICATION"
                onClick={() => setShow(true)}
                style={{color:"white"}}
              />
              <Tab
                className="h-64"
                label="CLIENT"
                onClick={() => setShow(true)}
                style={{color:"white"}}

              />
              <Tab
                className="h-64"
                label=" INQUIRY"
                onClick={() => setShow(true)}
                style={{color:"white"}}

              />
              <Tab
                className="h-64"
                label="SALES"
                onClick={() => setShow(true)}
                style={{color:"white"}}
                
              />
             
              {/* </div>---- */}
              {/* </div> */}

            <div className="addnew_btn">
                <Button
                  variant="contained"
                  size="small"
                  className="add_new"
                  onClick={addForm}
                >
                  <AddCircleOutlineIcon /> Add New
                </Button>
                </div>
            {/* </div>----- */}
            </Tabs>
         
    
        <div className={navvalue !== 0 ? "hidden" : ""}>
          {show ? <Application /> : <ApplicationForm />}
        </div>

        <div className={navvalue !== 1 ? "hidden" : ""}>
          {show ? <Client /> : <ClientForm />}
          
        </div>

        <div className={navvalue !== 2 ? "hidden" : ""}>
          {show ? <Inquiry /> : <Inquiryform />}
        </div>
        <div className={navvalue !== 3 ? "hidden" : ""}>
          {show ? <SalesTable /> : <SalesForm />}
        </div>
       </div>   
       </div>
    </>
  );
};

export default Marketingnav;
