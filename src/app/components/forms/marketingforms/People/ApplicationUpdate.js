import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import {useLocation} from "react-router-dom"

const ApplicationUpdate = () => {

  const location = useLocation();
  console.log("Application",location)
  
  const [save, setSave] = useState({
    projectid: location.state.data.projectid,
    appliedby: location.state.data.appliedby,
    applicationdate: location.state.data.applicationdate,
    projectname: location.state.data.projectname,
    rate: location.state.data.rate,
    technology: location.state.data.technology,
    platform: location.state.data.platform,
    link: location.state.data.link,
    location: location.state.data.location,
  });

  //form change Handler
  const changehandler = (e) => {
    setSave({
      ...save,
      [e.target.name]: e.target.value,
    });
   
  };

  // Form Submithander
  const submitHandler = (e) => {
    e.preventDefault();
    setSave({
      projectid: "",
      appliedby: "",
      applicationdate: "",
      projectname: "",
      rate: "",
      technology: "",
      platform: "",
      link: "",
      location: "",
    });
    console.log(save)
    // console.log(location.state.data)

    fetch(`http://192.168.1.96:4500/application/update/${save.projectid}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(save)
    }).then((result) => {
      console.log(result);
      tableData();
    });

  };

  return (
    <>
      <div className="appcontainer_main">
        <div className="application_form">
          <form action="" onSubmit={submitHandler}>
            <div className="app_form">
              <div className="app_form_subdiv">
                <div className="mendatory_field">
                  <div className="form_nav_container">
                    <div className="application_header_savebtn">
                      <h2>Update User</h2>
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
                  {/*========================= Basic Info ========================*/}
                  <div className="basic_info">
                    <div className="application_basic_info">
                      <div>
                        <h4 className="basic_input_fields">
                          Project Id <span>*</span>
                        </h4>
                        <TextField
                          id="outlined-basic"
                          size="small"
                          value={save.projectid}
                          onChange={changehandler}
                          name="projectid"
                          // label="Enter Project Id"
                          variant="outlined"
                          placeholder="Enter Project Id"
                          style={{ width: "20vw" }}
                        />
                      </div>
                      <div>
                        <h4 className="basic_input_fields">
                          Applied By<span>*</span>
                        </h4>

                        <TextField
                          id="outlined-basic"
                          size="small"
                          name="appliedby"
                          value={save.appliedby}
                          onChange={changehandler}
                          // label="Enter Applied By"
                          variant="outlined"
                          placeholder="Enter Applied By"
                          style={{ width: "20vw" }}
                        />
                      </div>
                      <div>
                        <h4 className="basic_input_fields">
                          Application Date<span>*</span>
                        </h4>
                        <TextField
                          id="date"
                          type="date"
                          name="applicationdate"
                          value={save.applicationdate}
                          onChange={changehandler}
                          placeholderText="select date"
                          size="small"
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          style={{ width: "20vw" }}
                        />
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
                            Project Name<span>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={save.projectname}
                            onChange={changehandler}
                            name="projectname"
                            variant="outlined"
                            placeholder="Project Name"
                            className="input_textfield"
                          />
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            Rate<span>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={save.rate}
                            onChange={changehandler}
                            name="rate"
                            placeholder="Rate"
                            variant="outlined"
                            className="input_textfield"
                          />
                        </div>
                      </div>

                      {/* =================2nd Row =================*/}

                      <div style={{ display: "flex" }}>
                        <div>
                          <h4 className="field_lable">
                            Technology<span>*</span>
                          </h4>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel
                              id="demo-simple-select-helper-label"
                              style={{ marginTop: "-0.7rem" }}
                            >
                              Technology
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={save.technology}
                              onChange={changehandler}
                              name="technology"
                              // label="Technology"
                              size="small"
                              className="input_textfield"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={'React'}>React</MenuItem>
                              <MenuItem value={'Node.js'}>Node.js</MenuItem>
                              <MenuItem value={'Python'}>Python</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div>
                          <h4 className="field_lable">
                            Platform<span>*</span>
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
                              value={save.platform}
                              onChange={changehandler}
                              name="platform"
                              // label="Platform"
                              size="small"
                              className="input_textfield"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={'x'}>x</MenuItem>
                              <MenuItem value={'y'}>y</MenuItem>
                              <MenuItem value={'z'}>z</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                      {/* =================3rd Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          <h4 className="field_lable">
                            Link<span>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            // label="Link"
                            value={save.link}
                            onChange={changehandler}
                            placeholder="https://"
                            name="link"
                            className="input_textfield"
                          />
                        </div>
                        <div>
                          <h4 className="field_lable">
                            Location<span>*</span>
                          </h4>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel
                              id="demo-simple-select-helper-label"
                              style={{ marginTop: "-0.7rem" }}
                            >
                              Location
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={save.location}
                              onChange={changehandler}
                              name="location"
                              // label="Location"
                              size="small"
                              className="input_textfield"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={'surat'}>surat</MenuItem>
                              <MenuItem value={'Bengaluru'}>Bengaluru</MenuItem>
                              <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
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
      <div>
      </div>
    </>
  );
};

export default ApplicationUpdate;
