import React, { useState } from "react";
import "./Inquiryform.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";


const UpdateInquiry = () => {
  const location = useLocation();
  console.log("Inquiry",location);
  const [show, setShow] = useState({
    inquiryid: location.state.data.inquiryid,
    projectname: location.state.data.projectname,
    firstname: location.state.data.firstname,
    lastname: location.state.data.lastname,
    link: location.state.data.link,
    projecttype: location.state.data.projecttype,
    technology: location.state.data.technology,
    platform: location.state.data.platform,
    applicationdate: location.state.data.applicationdate,
    appliedby: location.state.data.appliedby,
    rate: location.state.data.rate,
    location: location.state.data.location,
    frdate: location.state.data.frdate,
    lrdate: location.state.data.lrdate,
    lfdate: location.state.data.lfdate,
    managedby: location.state.data.managedby,
    meetingwith: location.state.data.meetingwith,
    assignedto: location.state.data.assignedto,
  });

  const changeHandler = (e) => {   //OnChange change Handler
    const { value, name } = e.target;
    setShow((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value,
      };
    });
  };
  const submithandler = (e) => {  //Submit handler
    setShow({
      inquiryid: "",
      projectname: "",
      firstname: "",
      lastname: "",
      link: "",
      projecttype: "",
      technology: "",
      platform: "",
      applicationdate: "",
      appliedby: "",
      rate: "",
      location: "",
      frdate: "",
      lrdate: "",
      lfdate: "",
      managedby: "",
      meetingwith: "",
      assignedto: "",
    });

    fetch(`http://192.168.1.96:4500/inquiry/update/${show.inquiryid}`, {   //Update Api
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(show)
    }).then((result) => {
      console.log(result);
      tableData();
    });
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
                      <h2>Update Inquiry</h2>
                      {/* <Link to="" className="li_nk">
                     <Button className="save_btn" type="submit" size="small">Save</Button>
                  </Link> */}
                    <div className="save_btn_div">
                
                <div>
                  <Button
                    className="save_btn"
                    type="submit"
                    size="small"
                    
                  >
                    Update User
                  </Button>
                </div>
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
                          {/* =======Project Name =====*/}
                          <h4 className="field_lable">
                            Inquiry Id<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.inquiryid}
                            onChange={changeHandler}
                            name="inquiryid"
                            variant="outlined"
                            placeholder="Enter Client Id"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Project Name =====*/}
                        <div>
                          <h4 className="field_lable">
                            Project Name<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.projectname}
                            onChange={changeHandler}
                            name="projectname"
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
                        {/* ======= Rate =====*/}
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
                      <div style={{ display: "flex" }}>
                        <div>
                          <h4 className="field_lable">
                            Link<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.link}
                            onChange={changeHandler}
                            name="link"
                            placeholder="https://"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            Project Type<span style={{ color: "red" }}>*</span>
                          </h4>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel
                              id="demo-simple-select-helper-label"
                              style={{ marginTop: "-0.7rem" }}
                            >
                              Select Project Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={show.projecttype}
                              onChange={changeHandler}
                              name="projecttype"
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
                              <MenuItem value={"React"}>React</MenuItem>
                              <MenuItem value={"Node.js"}>Node.js</MenuItem>
                              <MenuItem value={"Python"}>Python</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      {/* =================4th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======Project Name =====*/}
                          <h4 className="field_lable">
                            Technology<span style={{ color: "red" }}>*</span>
                          </h4>

                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel
                              id="demo-simple-select-helper-label"
                              style={{ marginTop: "-0.7rem" }}
                            >
                              Select Project Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={show.technology}
                              onChange={changeHandler}
                              name="technology"
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
                              <MenuItem value={"React"}>React</MenuItem>
                              <MenuItem value={"Node.js"}>Node.js</MenuItem>
                              <MenuItem value={"Python"}>Python</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            PlatForm<span style={{ color: "red" }}>*</span>
                          </h4>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel
                              id="demo-simple-select-helper-label"
                              style={{ marginTop: "-0.7rem" }}
                            >
                              Platform
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={show.platform}
                              onChange={changeHandler}
                              name="platform"
                              // label="Platform"
                              size="small"
                              className="input_textfield"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"x"}>x</MenuItem>
                              <MenuItem value={"y"}>y</MenuItem>
                              <MenuItem value={"z"}>z</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      {/* =================5th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* ======= Date =====*/}
                          <h4 className="field_lable">
                            Date<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="date"
                            type="date"
                            name="applicationdate"
                            value={show.applicationdate}
                            onChange={changeHandler}
                            placeholderText="select date"
                            size="small"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            Applied By<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.appliedby}
                            onChange={changeHandler}
                            name="appliedby"
                            placeholder="Enter Apllied By"
                            label="Enter Apllied By"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                      {/* =================6th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======Project Name =====*/}
                          <h4 className="field_lable">
                            Rate<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.rate}
                            onChange={changeHandler}
                            name="rate"
                            label="Rate"
                            variant="outlined"
                            placeholder="Rate"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Location =====*/}
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
                      </div>
                      {/* =================7th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======Project Name =====*/}
                          <h4 className="field_lable">
                            FR Date<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="date"
                            type="date"
                            value={show.frdate}
                            onChange={changeHandler}
                            name="frdate"
                            placeholder="Select Date"
                            size="small"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            LR Date<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="date"
                            type="date"
                            value={show.lrdate}
                            onChange={changeHandler}
                            name="lrdate"
                            placeholder="Select Date"
                            size="small"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                      {/* =================8th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======Project Name =====*/}
                          <h4 className="field_lable">
                            LF Date<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="date"
                            type="date"
                            value={show.lfdate}
                            onChange={changeHandler}
                            name="lfdate"
                            placeholder="Select Date"
                            size="small"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            Managed By<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.managedby}
                            onChange={changeHandler}
                            name="managedby"
                            placeholder="Enter Managed By"
                            label="Enter Managed By"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                      {/* =================9th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======Project Name =====*/}
                          <h4 className="field_lable">
                            Meeting With<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.meetingwith}
                            onChange={changeHandler}
                            name="meetingwith"
                            label="Enter Meeting With"
                            variant="outlined"
                            placeholder="Enter Meeting With"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            Assigned to<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={show.assignedto}
                            onChange={changeHandler}
                            name="assignedto"
                            placeholder="Enter Assigned To"
                            label="Enter Assigned to"
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
        </div>
      </div>

      <div></div>
    </>
  );
};
export default UpdateInquiry;
