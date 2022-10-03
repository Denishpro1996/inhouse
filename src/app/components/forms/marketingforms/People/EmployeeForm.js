import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import SaveButton from "src/app/components/config/SaveButton";
import axios from "axios";

// const authenticateSignup = async(data)=>{
//   try{
//     return await axios.post(URL,data)
//     }catch(error){
//       console.log('error',error)
//     }
//   }

const EmployeeForm = () => {
  const [image,setImage]=useState({
    addprofilepicture:"",
  });
  const [save, setSave] = useState({
    employeeid: "",
    firstname: "",
    lastname: "",
    personalemail: "",
    companyemail: "",
    mobile: "",
    bloodgroup: "",
    dateofjoin: " ",
    dateofbirth: "",
    relievingdate: "",
    anniversary: "",
    bondduration: "",
    department: "",
    fathername: "",
    fathermobile: "",
    fatheroccupation: "",
    fatherbloodgroup: "",
    mothername: "",
    mothermobile: "",
    motheroccupation: "",
    motherbloodgroup: "",
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setSave((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSave({
      employeeid: "",
      firstname: "",
      lastname: "",
      personalemail: "",
      companyemail: "",
      mobile: "",
      bloodgroup: "",
      dateofjoin: " ",
      dateofbirth: "",
      relievingdate: "",
      anniversary: "",
      bondduration: "",
      department: "",
      fathername: "",
      fathermobile: "",
      fatheroccupation: "",
      fatherbloodgroup: "",
      mothername: "",
      mothermobile: "",
      motheroccupation: "",
      motherbloodgroup: "",
    });
    console.log(save);

    // POST Api fetch
    const url='http://192.168.1.96:4500/employee'
    const formData = new FormData();
    formData.append('employeeid',save.employeeid) //(1st fieldname , 2nd usestate)
    formData.append('firstname',save.firstname) 
    formData.append('lastname',save.lastname)
    formData.append('personalemail',save.personalemail)
    formData.append('companyemail',save.companyemail)
    formData.append('mobile',save.mobile)
    formData.append('bloodgroup',save.bloodgroup)
    formData.append('addprofilepicture',image)
    formData.append('dateofjoin',save.dateofjoin)
    formData.append('dateofbirth',save.dateofbirth)
    formData.append('relievingdate',save.relievingdate)
    formData.append('anniversary',save.anniversary)
    formData.append('bondduration',save.bondduration)
    formData.append('department',save.department)
    formData.append('fathername',save.fathername)
    formData.append('fathermobile',save.fathermobile)
    formData.append('fatheroccupation',save.fatheroccupation)
    formData.append('mothername',save.mothername)
    formData.append('mothermobile',save.mothermobile)
    formData.append('motheroccupation',save.motheroccupation)
    formData.append('motherbloodgroup',save.motherbloodgroup)

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
          <form action="" onSubmit={submitHandler}>
            <div className="app_form">
              <div className="app_form_subdiv">
                <div className="mendatory_field">
                  <div className="form_nav_container">
                    <div className="application_header_savebtn">
                      <h2>Add Employee</h2>
                      {/* <Link to="" className="li_nk">
                     <Button className="save_btn" type="submit" size="small">Save</Button>
                  </Link> */}
                      <SaveButton />
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
                            Emp Id<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            type="number"
                            value={save.employeeid}
                            onChange={changeHandler}
                            name="employeeid"
                            variant="outlined"
                            placeholder="Enter Employee Id"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Project Name =====*/}
                        <div>
                          <h4 className="field_lable">
                            Add Profile Picture //Pending**
                            <span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            type="file"
                            value={save.addprofilepicture}
                            onChange={(event)=>{
                              setImage(event.target.files[0])
                            }}
                            size="small"
                            name="addprofilepicture"
                            placeholder="Upload Or Drop a File Here"
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
                            value={save.clientid}
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
                            value={save.lastname}
                            onChange={changeHandler}
                            name="lastname"
                            placeholder="Last Name"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                      {/* =================3rd Row ================= */}
                      <div style={{ display: "flex" }}>
                        {/* =========Personal Email================ */}
                        <div>
                          <h4 className="field_lable">
                            Personal Email
                            <span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            type="email"
                            size="small"
                            value={save.personalemail}
                            onChange={changeHandler}
                            name="personalemail"
                            placeholder="Enter Personal Email"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Company Email =====*/}
                        <div>
                          <h4 className="field_lable">
                            Company Email<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            type="email"
                            size="small"
                            value={save.companyemail}
                            onChange={changeHandler}
                            name="companyemail"
                            placeholder="Enter Company Email"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          />
                        </div>
                      </div>
                      {/* =================4th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======Phone Number =====*/}
                          <h4 className="field_lable">
                            Mobile //Pending**
                            <span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            type="number"
                            size="small"
                            value={save.mobile}
                            onChange={changeHandler}
                            name="mobile"
                            label="Your Phone Number"
                            variant="outlined"
                            placeholder="Project Name"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Rate =====*/}
                        <div>
                          <h4 className="field_lable">
                            Blood Group<span style={{ color: "red" }}>*</span>
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
                              value={save.bloodgroup}
                              onChange={changeHandler}
                              name="bloodgroup"
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
                              <MenuItem value={10}>O-</MenuItem>
                              <MenuItem value={20}>O+</MenuItem>
                              <MenuItem value={30}>A-</MenuItem>
                              <MenuItem value={40}>A+</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      {/* =================5th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* ======= Date =====*/}
                          <h4 className="field_lable">
                            Date Of join<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="date"
                            type="date"
                            value={save.dateofjoin}
                            onChange={changeHandler}
                            name="dateofjoin"
                            placeholder="Select Date"
                            size="small"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            style={{ width: "24vw" }}
                          />
                        </div>
                        <div>
                          {/* ======= Birth Date =====*/}
                          <h4 className="field_lable">
                            Date Of Birth<span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="date"
                            type="date"
                            value={save.dateofbirth}
                            onChange={changeHandler}
                            name="dateofbirth"
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
                      {/* =================6th Row =================*/}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* ======= Relieving Date =====*/}
                          <h4 className="field_lable">
                            Relieving Date{" "}
                            <span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="date"
                            type="date"
                            value={save.relievingdate}
                            onChange={changeHandler}
                            name="relievingdate"
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
                          {/* ======= Relieving Date =====*/}
                          <h4 className="field_lable">
                            Anniversary <span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="date"
                            type="date"
                            value={save.anniversary}
                            onChange={changeHandler}
                            name="anniversary"
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
                      {/* ============================================== */}
                      <div style={{ display: "flex" }}>
                        <div>
                          {/* =======Project Name =====*/}
                          <h4 className="field_lable">
                            Bond Duration{" "}
                            <span style={{ color: "red" }}>*</span>
                          </h4>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={save.bondduration}
                            onChange={changeHandler}
                            name="bondduration"
                            variant="outlined"
                            placeholder="Enter Employee Id"
                            style={{ width: "24vw" }}
                          />
                        </div>
                        {/* ======= Project Name =====*/}
                        <div>
                          <h4 className="field_lable">
                            Department<span style={{ color: "red" }}>*</span>
                          </h4>
                          {/* <TextField
                            id="outlined-basic"
                            type="file"
                            value={save.department}
                            onChange={changeHandler}
                            size="small"
                            name="department"
                            placeholder="Upload Or Drop a File Here"
                            variant="outlined"
                            style={{ width: "24vw" }}
                          /> */}
                          <TextField
                            id="outlined-basic"
                            size="small"
                            value={save.department}
                            onChange={changeHandler}
                            name="department"
                            variant="outlined"
                            placeholder="Enter Employee Id"
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
      {/* ==========================================Father====================================================== */}
      <form action="">
        <div className="app_form">
          <div className="app_form_subdiv">
            <div className="mendatory_field">
              <div className="form_nav_container">
                <div className="application_header_savebtn">
                  <h2>Father</h2>
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
                        Name<span style={{ color: "red" }}>*</span>
                      </h4>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        value={save.fathername}
                        onChange={changeHandler}
                        name="fathername"
                        variant="outlined"
                        placeholder="Enter Name"
                        style={{ width: "24vw" }}
                      />
                    </div>
                    {/* ======= Project Name =====*/}
                    <div>
                      <h4 className="field_lable">
                        Mobile // Pending<span style={{ color: "red" }}>*</span>
                      </h4>
                      <TextField
                        id="outlined-basic"
                        type="number"
                        size="small"
                        value={save.fathermobile}
                        onChange={changeHandler}
                        name="fathermobile"
                        variant="outlined"
                        placeholder="Enter Mobile Number"
                        style={{ width: "24vw" }}
                      />
                      {/* <TextField
                        id="outlined-basic"
                        type="number"
                        value={save.fathermobile}
                        onChange={changeHandler}
                        size="small"
                        name="fathermobile"
                        placeholder="Upload Or Drop a File Here"
                        variant="outlined"
                        style={{ width: "24vw" }}
                      /> */}
                    </div>
                  </div>
                  {/* =================2nd Row =================*/}
                  <div style={{ display: "flex" }}>
                    <div>
                      {/* =======Occupation =====*/}
                      <h4 className="field_lable">
                        Occupation<span style={{ color: "red" }}>*</span>
                      </h4>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        value={save.fatheroccupation}
                        onChange={changeHandler}
                        name="fatheroccupation"
                        variant="outlined"
                        placeholder="Enter Occupation"
                        style={{ width: "24vw" }}
                      />
                    </div>
                    {/* ======= Last Name =====*/}
                    <div>
                      <h4 className="field_lable">
                        Blood Group<span style={{ color: "red" }}>*</span>
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
                          value={save.fatherbloodgroup}
                          onChange={changeHandler}
                          name="fatherbloodgroup"
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
                          <MenuItem value={10}>O-</MenuItem>
                          <MenuItem value={20}>O+</MenuItem>
                          <MenuItem value={30}>A-</MenuItem>
                          <MenuItem value={40}>A+</MenuItem>
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
      {/*=================================================Mother=========================================================*/}
      <form action="">
        <div className="app_form">
          <div className="app_form_subdiv">
            <div className="mendatory_field">
              <div className="form_nav_container">
                <div className="application_header_savebtn">
                  <h2>Mother</h2>
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
                      {/* =======Project Name =====*/}
                      <h4 className="field_lable">
                        Name<span style={{ color: "red" }}>*</span>
                      </h4>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        value={save.mothername}
                        onChange={changeHandler}
                        name="mothername"
                        variant="outlined"
                        placeholder="Enter Name"
                        style={{ width: "24vw" }}
                      />
                    </div>
                    {/* ======= Project Name =====*/}
                    <div>
                      <h4 className="field_lable">
                        Mobile // Pending<span style={{ color: "red" }}>*</span>
                      </h4>
                      {/* <TextField
                        id="outlined-basic"
                        type="number"
                        size="small"
                        value={save.fathermobile}
                        onChange={changeHandler}
                        name="fathermobile"
                        variant="outlined"
                        placeholder="Enter Mobile Number"
                        style={{ width: "24vw" }}
                      /> */}
                      <TextField
                        id="outlined-basic"
                        type="number"
                        size="small"
                        value={save.mothermobile}
                        onChange={changeHandler}
                        name="mothermobile"
                        variant="outlined"
                        placeholder="Enter Mobile Number"
                        style={{ width: "24vw" }}
                      />
                    </div>
                  </div>
                  {/* =================2nd Row =================*/}
                  <div style={{ display: "flex" }}>
                    <div>
                      {/* =======Occupation =====*/}
                      <h4 className="field_lable">
                        Occupation<span style={{ color: "red" }}>*</span>
                      </h4>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        value={save.motheroccupation}
                        onChange={changeHandler}
                        name="motheroccupation"
                        variant="outlined"
                        placeholder="Enter Occupation"
                        style={{ width: "24vw" }}
                      />
                    </div>
                    {/* ======= Last Name =====*/}
                    <div>
                      <h4 className="field_lable">
                        Blood Group<span style={{ color: "red" }}>*</span>
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
                          value={save.motherbloodgroup}
                          onChange={changeHandler}
                          name="motherbloodgroup"
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
                          <MenuItem value={10}>O-</MenuItem>
                          <MenuItem value={20}>O+</MenuItem>
                          <MenuItem value={30}>A-</MenuItem>
                          <MenuItem value={40}>A+</MenuItem>
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
      {/* ======================================== */}

      <div className="document_upload_parent">
        <div className="document_upload_child">
          <div className="document_upload_header">
            <h1>Document Upload</h1>
          </div>
          <div className="uploder_">
            <div className="uploading_container">
              <div className="image_container">
                <div className="images"></div>
                <div>
                  <progress id="file" value="32" max="150">
                  </progress>
                </div>
              </div>
              <div className="drag_drop_imagecontainer">

              </div>
            </div>
            <div className="uploder_container"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployeeForm;
