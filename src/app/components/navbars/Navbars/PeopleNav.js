import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "./PeopleNav.css";
import Leave from "../../People/Leave/Pending/Leave";
import Employee from "../../People/Employee/Employee";
import Package from "../../People/Package/Package";
import Attendance from "../../People/Attendance/Attendance";
import PeopleHeader from "../../config/PeopleHeader";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EmployeeForm from "../../forms/marketingforms/People/EmployeeForm";

const PeopleNav = () => {
  const [tabValue, setTabValue] = useState(0);

  function handleTabChange(event, value) {
    setTabValue(value);
  }
  const [show, setShow] = useState(false); //useState for Add Button show n hide
  const [form, setForm] = useState(true); // useState to Show Form
  return (
    <>
      <PeopleHeader />
      <div>
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
            label="ATTENDANCE"
            onClick={() => setShow(false)}
            style={{color:"white"}}

          />
          <Tab className="h-64" 
          label="LEAVE" 
          style={{color:"white"}}

           />

          <Tab
            className="h-64"
            label="EMPLOYEE"
            onClick={() => setShow(true)}
            style={{color:"white"}}
          />
          <Tab
            className="h-64"
            label="PACKAGE"
            onClick={() => setShow(false)}
            style={{color:"white"}}

          />
          {show ? (
            <div className="addnew_btn">
              <div>
                <Button
                  variant="contained"
                  size="small"
                  className="add_new"
                  onClick={() => setForm(false)}
                >
                  <AddCircleOutlineIcon /> Add New
                </Button>
              </div>
            </div>
          ) : null}
        </Tabs>
        <div>
          <div className={tabValue !== 0 ? "hidden" : ""}>
            <Attendance />
          </div>

          <div className={tabValue !== 1 ? "hidden" : ""}>
            <Leave />
          </div>

          <div className={tabValue !== 2 ? "hidden" : ""}>
            {form ? <Employee /> : <EmployeeForm />}
          </div>

          <div className={tabValue !== 3 ? "hidden" : ""}>
            <Package />
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleNav;
