import React, { useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import './Package.css'
const Package = () => {
  // const [packarr,setpackarr]=useState([]);
  const [packageform,setpackageform]=useState({
    employeeid:"",
    designation :"",
    startdate:"",
    enddate:"",
    basic:""
  });
const changeHandler=(e)=>{
  const { value, name } = e.target;
  setpackageform((form) => {
    return {
      ...form,
      [name]: value,
    };
  });
}
const submitHandler=(e)=>{
  e.preventDefault();
  setpackageform({
    employeeid:"",
    designation :"",
    startdate:"",
    enddate:"",
    basic:""
  })
  console.log(packageform)


  
  fetch("http://192.168.1.96:4500/salary", {
    method: "POST",
    body: JSON.stringify(packageform),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
  return (
    <>
          <form className="package_main_form" onSubmit={submitHandler}>
            <div className="package_form" >
              <div className="app_form_subdiv">
                <div className="mendatory_field">
                  <div className="form_nav_container">
                    <div className="application_header_savebtn">
                      <h2>Add New Application</h2>
                      <div className="save_btn_div"> 
                      {/* <Link to="/people/employee" className="li_nk"> */}
                        <Button className="save_btn" type="submit" size="small" >
                          Save
                        </Button>
                      {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*================== Client Information==================== */}
                <div className="client">
                  <div className="client_details">
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      {/* ==================1st Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======Employee Id=====*/}
                          <h4 className="field_lable">
                            Emp Id<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            onChange={changeHandler}
                            value={packageform.employeeid}
                            name="employeeid"
                            variant="outlined"
                            placeholder="Enter Employee ID"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Designation=====*/}
                        <div>
                          <h4 className="field_lable">
                            Designation<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            onChange={changeHandler}
                            value={packageform.designation}
                            name="designation"
                            placeholder="Enter Designation"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>

                      {/* =================2nd Row =================*/}
                      <div style={{ display: "flex" }}>
                    <div>
                      {/* ======= Start Date =====*/}
                      <h4 className="field_lable">
                      Start Date<span style={{ color: "red" }}>*</span>
                      </h4>
                      <TextField
                        id="date"
                        type="date"
                        onChange={changeHandler}
                        name="startdate"
                        value={packageform.startdate}
                        size="small"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: "24vw" }}
                      />
                    </div>
                    <div>
                      {/* ======= End Date =====*/}
                      <h4 className="field_lable">
                     End Date<span style={{ color: "red" }}>*</span>
                      </h4>
                      <TextField
                        id="date"
                        type="date"
                        onChange={changeHandler}
                        value={packageform.enddate}
                        onFocus="(this.type='date')"
                        onBlur="if(!this.value) this.type='value' "
                        name="enddate"
                        placeholder="Select Date"
                        size="small"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: "24vw" }}
                      />
                      
                      {/* <input type="text" name="date"  onFocus="(this.type='date')"
                        onBlur="if(!this.value) this.type='value' "
                        id="date"
                        onChange={changeHandler}
                        value={packageform.enddate}
                        placeholder="Select Date"
                        size="small"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: "24vw",backgroundColor:"black"}} /> */}
                    </div>
                  </div>
                      {/* =================3rd Row =================*/}

                      {/* ======= Basic =====*/}

                      <div style={{ display: "flex" }}>
                        <div>
                          <h4 className="field_lable">
                            Basic<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            onChange={changeHandler}
                            value={packageform.basic}
                            name="basic"
                            placeholder="Basic"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </form>
       
       <div>
       {/* {packarr.map((e)=>{
      return(
    
        <tr>
            <th>
              <td>Employee  ID: {e.employeeid}</td> <br />
              <td>Designation: {e.designation}</td> <br />
              <td>Start Date : {e.startdate}</td> <br />
              <td> End Date: {e.enddate}</td> <br />
              <td>Basic : {e.basic}</td> <br />
            </th>
          </tr>
      )
    })} */}
       </div>
    
 
    </>
  );
};
export default Package;
