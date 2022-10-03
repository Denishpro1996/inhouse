import React, { useState } from "react";
import "./Inquiryform.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SaveButton from "../../config/SaveButton";
import axios from "axios";

const ClientForm = () => {
  const [images,setImages]=useState({
    addprofilepicture:"",
  })
  const [show, setShow] = useState({
  clientid:"",
  skypeid:"",
  firstname:"",
  lastname:"",
  email:"", 
  phonenumber: "",  
  linkdin: "",
  location:"",
  company: "",
  });
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setShow((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value,
      };
    });
  };
  const submithandler = (e) => {
    e.preventDefault();
    setShow({
      clientid:"",
      skypeid:"",
      firstname:"",
      lastname:"",
      email:"", 
      phonenumber: "",  
      linkdin: "",
      location:"",
      company: "",
      });
        const url='http://192.168.1.96:4500/client'
        const formData = new FormData();
        formData.append('clientid',show.clientid) //(1st field name , 2nd usestate)
        formData.append('skypeid',show.skypeid) 
        formData.append('firstname',show.firstname)
        formData.append('lastname',show.lastname)
        formData.append('email',show.email)
        formData.append('phonenumber',show.phonenumber)
        formData.append('linkdin',show.linkdin)
        formData.append('addprofilepicture',images)
        formData.append('location',show.location)
        formData.append('company',show.company)

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },  
        };
        console.log(formData)
        axios.post(url,formData,config).then((res)=>{
          console.log(res)
        })
        
  };
  return (
    <>
      <div>
        <div>
          <form action="" onSubmit={submithandler}>
            <div className="app_form">
              <div className="app_form_subdiv">
                <div className="mendatory_field">
                  <div className="form_nav_container">
                    <div className="application_header_savebtn">
                      <h2>Add New Inquiry</h2>
                      <SaveButton />
                    </div>
                  </div>
                </div>

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
                          {/* =======Client ID =====*/}
                          <h4 className="field_lable">
                            Client Id<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.clientid}
                            onChange={changeHandler}
                            name="clientid"
                            variant="outlined"
                            placeholder="Enter Client Id"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Skype Id =====*/}
                        <div>
                          <h4 className="field_lable">
                            Skype ID<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.skypeid}
                            onChange={changeHandler}
                            name="skypeid"
                            placeholder="Enter Skype Id"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>

                      {/* =================2nd Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======First Name =====*/}
                          <h4 className="field_lable">
                            First Name<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.firstname}
                            onChange={changeHandler}
                            name="firstname"
                            variant="outlined"
                            placeholder="Enter First Name"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Last Name =====*/}
                        <div>
                          <h4 className="field_lable">
                            Last Name<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.lastname}
                            onChange={changeHandler}
                            name="lastname"
                            placeholder="Last Name"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                      {/* =================3rd Row =================*/}

                      {/* ======= Email=====*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          <h4 className="field_lable">
                            Email<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.email}
                            onChange={changeHandler}
                            name="email"
                            placeholder="Email"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Phone Number =====*/}
                        <div>
                          <h4 className="field_lable">
                            Phone Number<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            type='number'
                            value={show.phonenumber}
                            onChange={changeHandler}
                            name="phonenumber"
                            placeholder="Enter Phone Number"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                      {/* =================4th Row =================*/}
                      <div style={{ display: "flex" }}>
                      <div>
                          <h4 className="field_lable">
                            LinkDin<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.linkdin}
                            onChange={changeHandler}
                            name="linkdin"
                            placeholder="Enter LinkDin"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            Add Profile Picture<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            type='file'
                            onChange={(event)=>{
                              console.log(event.target.files[0]);
                              setImages(event.target.files[0])
                            }}
                            name="addprofilepicture"
                            placeholder="Enter Profile Picture"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                      {/* =================5th Row =================*/}
                      <div style={{ display: "flex" }}>
                      <div>
                          <h4 className="field_lable">
                            Location<span style={{ color: "red" }}>*</span>
                          </h4>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel
                              id="demo-simple-select-helper-label"
                              style={{ marginTop: "-0.7rem" }}
                            >
                              Choose Location
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={show.location}
                              onChange={changeHandler}
                              name="location"
                              label="Select Project Type"
                              size="small"
                              style={{
                                width: "24vw",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"Surat"}>Surat</MenuItem>
                              <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        {/* ======= Company =====*/}
                        <div>
                          <h4 className="field_lable">
                            Company<span style={{ color: "red" }}>*</span>
                          </h4>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel
                              id="demo-simple-select-helper-label"
                              style={{ marginTop: "-0.7rem" }}
                            >
                              Choose Company
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={show.company}
                              onChange={changeHandler}
                              name="company"
                              label="Select Company"
                              size="small"
                              style={{
                                width: "24vw",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"A"}>A</MenuItem>
                              <MenuItem value={"B"}>B</MenuItem>
                              <MenuItem value={"C"}>C</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};
export default ClientForm;
