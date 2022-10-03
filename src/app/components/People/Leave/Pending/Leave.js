import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import './Leave.css'
import Approved from "../Approved/Approved";
import Rejected from "../Rejected";
import Pending from './Pending'




const Leave = () => {
  const [tabValue, setTabValue] = useState(0);
  function handleTabChange(event, value) {
    setTabValue(value);
  }
  return (
    <>
      <div className="leave_compo">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          style={{ margin: "1.25rem" }}
          classes={{ root: "w-full h-64 border-b-1" }}
        >
          <Tab
            className="h-64"
            label="PENDING"
            style={{color:"white"}}
          />
          <Tab className="h-64" 
          label="APPROVED" 
          style={{color:"white"}}
           />
          <Tab
            className="h-64"
            label="REJECTED"
            style={{color:"white"}}
          />
        </Tabs>
        <div>
          <div className={tabValue !== 0 ? "hidden" : ""} >
            <Pending />
          </div>
          <div className={tabValue !== 1 ? "hidden" : ""}>
            <Approved />
          </div>
          <div className={tabValue !== 2 ? "hidden" : ""}>
            <Rejected /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Leave;
