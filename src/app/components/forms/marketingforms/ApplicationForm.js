import React from "react";
import { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./ApplicationForm.css";
import Button from "@mui/material/Button";

const ApplicationForm = () => {
  const [show, setShow] = useState(false); //save btn
  const [save, setSave] = useState({
    appliedby: "",
    applicationdate: "",
    projectname: "",
    rate: "",
    technology: "",
    platform: "",
    link: "",
    location: "",
  });
  const [id,setId]=useState("")
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  //form change Handler
  const changehandler = (e) => {
    const { value, name } = e.target;
    setSave((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value,
      };
    });
  };

  const idchange=(e)=>{
    setId(e.target.value)
  }
  // Form Submithander
  const submitHandler = (e) => {
    const data = {
      projectid:id,
      appliedby: save.appliedby,
      applicationdate: save.applicationdate,
      projectname: save.projectname,
      rate: save.rate,
      technology: save.technology,
      platform: save.platform,
      link: save.link,
      location: save.location,
    }
    e.preventDefault();
    setSave({
      
      appliedby: "",
      applicationdate: "",
      projectname: "",
      rate: "",
      technology: "",
      platform: "",
      link: "",
      location: "",
    });
    console.log(save);

    // Api Fetching
    fetch("http://192.168.1.96:4500/application", {
      //Post API
      method: "POST",
      body: JSON.stringify(data),
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
    setFormErrors(validate(save));
    setIsSubmit(true);
  };

  // get Api
  const getData = async () => {
    const resp = await fetch("http://192.168.1.96:4500/application");
    const actualdata = await resp.json();
    // console.log(actualdata.projectid)
     setId(actualdata.projectid);
 }
 useEffect(()=>{
  getData();
 },[])

  const validate = (values) => {
    const errors = {};
    const link = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;  
    const alphabet = /^[a-zA-Z]+$/
    const number = /^\d+$/;

    if (!values.appliedby) {
      errors.appliedby = "Appliedby  Can't Be Empty";
    } else if(!alphabet.test(values.appliedby)) {
      errors.appliedby = "Numbers are not allowed";
    }
    if (!values.applicationdate) {
      errors.applicationdate = "Applicationdate Id Can't Be Empty";
    }
    if (!values.projectname) {
      errors.projectname = "Projectname  Can't Be Empty";
    }
    if (!values.rate) {
      errors.rate = "Rate  Can't Be Empty";
    } else if(!number.test(values.rate)) {
      errors.rate = "Only numbers are allowed";
    }
    if (!values.technology) {
      errors.technology = "Technology  Can't Be Empty";
    }
    if (!values.platform) {
      errors.platform = "Platform  Can't Be Empty";
    }
    if (!values.link) {
      errors.link = "Link  Can't Be Empty";
    }else if(!link.test(values.link)){
      errors.link = "Not a valid link";
    }
    if (!values.location) {
      errors.location = "Location  Can't Be Empty";
    }
    return errors;
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
                      <h2>Add New Application</h2>
                      <div className="save_btn_div">
                        <div>
                          <Button
                            className="save_btn"
                            type="submit"
                            size="small"
                            onClick={() => setShow(true)}
                          >
                            Save
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
                          value={id}
                          onChange={idchange}
                          name="projectid"
                          // label="Enter Project Id"
                          variant="outlined"
                          placeholder="Enter Project Id"
                          style={{ width: "20vw" }}
                          required={true}
                        />
                        <p className="__error__">{formErrors.projectid}</p>
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
                        <p className="__error__">{formErrors.appliedby}</p>
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
                         <p className="__error__">{formErrors.applicationdate}</p>
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
                          <p className="__error__">{formErrors.projectname}</p>
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
                            <p className="__error__">{formErrors.rate}</p>
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
                              <MenuItem value={"React"}>React</MenuItem>
                              <MenuItem value={"Node.js"}>Node.js</MenuItem>
                              <MenuItem value={"Python"}>Python</MenuItem>
                            </Select>
                          </FormControl>
                          <p className="__error__">{formErrors.technology}</p>
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
                              <MenuItem value={"x"}>x</MenuItem>
                              <MenuItem value={"y"}>y</MenuItem>
                              <MenuItem value={"z"}>z</MenuItem>
                            </Select>
                          </FormControl>
                          <p className="__error__">{formErrors.platform}</p>
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
                          <p className="__error__">{formErrors.link}</p>
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
                              <MenuItem value={"surat"}>surat</MenuItem>
                              <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                            </Select>
                          </FormControl>
                          <p className="__error__">{formErrors.location}</p>
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

export default ApplicationForm;
