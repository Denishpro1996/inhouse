import * as React from "react";
// card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./EmployeeCard.css";
// image
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// Icons
import CallIcon from "@mui/icons-material/Call";
import { useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
// Drawer
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"; //LEFT iCON
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; //RIGHT
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

let i = 0;
const EmployeeCard = () => {
  const [show, setShow] = useState([]); //For API
  const [details, SetDetails] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); //For Mui Drawer
  const [next,setnext] = useState([]); //For Data change
  const [nextData,setNextData]=useState(next[i]); //Data Change



  const [ifTrue,setIfTrue]=useState(false)   //Ternary Operator


  const tableData = async () => {
    //Get Data Api
    try {
      const resp = await fetch("http://192.168.1.96:4500/allemployee");
      const actualData = await resp.json();
      setShow(actualData);
      setnext(actualData);
    } catch (err) {}
  };
  useEffect(() => {
    tableData();
  }, []);

  const DrawerOpen = (id) => {
    setIsDrawerOpen(true);
    SetDetails(id);
  };

  const prevEmployee = () => {   //Preve. Data
    if(i>0){
      i--;
    }
    else{
      i=(next.length-1);
    }
    setNextData(next[i]);
  };

  const nextEmployee = () => {  //Next data
    if(i<= next.length-2){
      i++;
    }else{
      i=0;
    }
    setNextData(next[i]);
    // console.log(next[i])
    setIfTrue(true) 
  };  
  return (
    <>
      <div className="EmployeeCard_Container">
        {show.map((currValue) => {
          return (
            <div className="EmployeeCard">
              <Card className="employee_card">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {currValue.employeeid}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    <div className="employee_image">
                      <img src={currValue.addprofilepicture} alt="" />
                    </div>
                  </Typography>
                  <Typography
                    className="my-10"
                    sx={{ mb: 1.5 }}
                    style={{ fontSize: "18px" }}
                  >
                    {currValue.firstname}
                    {currValue.lastname}
                  </Typography>
                  <Typography variant="body2">
                    <EmailIcon /> {currValue.personalemail}
                    <br />
                    <div className="my-10">
                      <CallIcon /> {currValue.mobile}
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    style={{ color: "white" }}
                    onClick={() => DrawerOpen(currValue)}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
      {/* =============================== ===========       ============= */}


      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
{!ifTrue ? (
  <>
  <Box p={2} width="40rem" textAlign="center" role="presentation">
          <div className="empl_header">
            <div className="row emp_h">
              <div className="col-lg-3">
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src={details.addprofilepicture} />
                </Stack>
              </div>
              <div className="col-lg-3">
                <h3>
                  {details.firstname} {details.lastname}
                </h3>
                <span className="font_size">{details.department}</span>
                <span className="font_size">Design</span>
              </div>
              <div className="col-lg-3 Employee_btn">
                <button className="emp_btn">
                  <ArrowBackIosIcon
                    style={{ fontSize: "12px", textAlign: "center" }}
                    onClick={prevEmployee}
                  />
                </button>
                <button className="emp_btn">
                  <ArrowForwardIosIcon
                    style={{ fontSize: "12px", textAlign: "center" }}
                    onClick={nextEmployee}
                  />
                </button>
              </div>
              <div className="col-lg-3">
                <Button variant="outlined" id="employee_button">
                  <EmailIcon /> Send Email
                </Button>
              </div>
            </div>
          </div>
        </Box>

        <div className="emp_detail">
          <div className="row emp_editer">
            <div className="col-lg-6">
              <h3 className="h3_size">Basic Information</h3>
            </div>
            <div className="col-lg-6">
              <button className="edit_btn">
                <BorderColorIcon />
              </button>
            </div>
          </div>
          <div className="row basic_info">
            <div className="col-lg-6">
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span className="span_size">
                    {details.firstname}
                    {details.lastname}
                  </span>
                  <h5 className="h5_size">Employee {details.employeeid}</h5>
                </div>
              </div>
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Employee ID</span>
                  <h5>{details.employeeid}</h5>
                </div>
              </div>
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Blood Goup</span>
                  <h5>{details.bloodgroup}</h5>
                </div>
              </div>
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Date Of Birth</span>
                  <h5>{details.dateofbirth}</h5>
                </div>
              </div>
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Anniversary</span>
                  <h5>{details.anniversary}</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Email</span>
                  <h5>{details.personalemail}</h5>
                </div>
              </div>
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Mobile</span>
                  <h5> {details.mobile}</h5>
                </div>
              </div>
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Date Of join</span>
                  <h5>{details.dateofjoin}</h5>
                </div>
              </div>
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Relieving Date</span>
                  <h5>{details.relievingdate}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="emp_detail">
          <div className="row emp_editer">
            <div className="col-lg-6">
              <h3 className="h3_size">Package Information</h3>
            </div>
            <div className="col-lg-6">
              <button className="edit_btn">
                <BorderColorIcon />
              </button>
            </div>
          </div>
          <div className="row basic_info">
            <div className="col-lg-6">
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Designation</span>
                  <h5>{details.department}</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="emp_name">
                <div className="name_icon">
                  <PersonOutlineOutlinedIcon />
                </div>
                <div className="f_name">
                  <span>Email</span>
                  <h5>{details.companyemail}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
):(
  <>
  
  <Box p={2} width="40rem" textAlign="center" role="presentation">
  <div className="empl_header">
    <div className="row emp_h">
      <div className="col-lg-3">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={nextData.addprofilepicture} />
        </Stack>
      </div>
      <div className="col-lg-3">
        <h3>
          {nextData.firstname} {nextData.lastname}
        </h3>
        <span className="font_size">{nextData.department}</span>
        <span className="font_size">Design</span>
      </div>
      <div className="col-lg-3 Employee_btn">
        <button className="emp_btn">
          <ArrowBackIosIcon
            style={{ fontSize: "12px", textAlign: "center" }}
            onClick={prevEmployee}
          />
        </button>
        <button className="emp_btn">
          <ArrowForwardIosIcon
            style={{ fontSize: "12px", textAlign: "center" }}
            onClick={nextEmployee}
          />
        </button>
      </div>
      <div className="col-lg-3">
        <Button variant="outlined" id="employee_button">
          <EmailIcon /> Send Email
        </Button>
      </div>
    </div>
  </div>
</Box>

<div className="emp_detail">
  <div className="row emp_editer">
    <div className="col-lg-6">
      <h3 className="h3_size">Basic Information</h3>
    </div>
    <div className="col-lg-6">
      <button className="edit_btn">
        <BorderColorIcon />
      </button>
    </div>
  </div>
  <div className="row basic_info">
    <div className="col-lg-6">
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span className="span_size">
            {nextData.firstname}
            {nextData.lastname}
          </span>
          <h5 className="h5_size">Employee {nextData.employeeid}</h5>
        </div>
      </div>
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Employee ID</span>
          <h5>{nextData.employeeid}</h5>
        </div>
      </div>
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Blood Goup</span>
          <h5>{nextData.bloodgroup}</h5>
        </div>
      </div>
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Date Of Birth</span>
          <h5>{nextData.dateofbirth}</h5>
        </div>
      </div>
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Anniversary</span>
          <h5>{nextData.anniversary}</h5>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Email</span>
          <h5>{nextData.personalemail}</h5>
        </div>
      </div>
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Mobile</span>
          <h5> {nextData.mobile}</h5>
        </div>
      </div>
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Date Of join</span>
          <h5>{nextData.dateofjoin}</h5>
        </div>
      </div>
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Relieving Date</span>
          <h5>{nextData.relievingdate}</h5>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="emp_detail">
  <div className="row emp_editer">
    <div className="col-lg-6">
      <h3 className="h3_size">Package Information</h3>
    </div>
    <div className="col-lg-6">
      <button className="edit_btn">
        <BorderColorIcon />
      </button>
    </div>
  </div>
  <div className="row basic_info">
    <div className="col-lg-6">
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Designation</span>
          <h5>{nextData.department}</h5>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="emp_name">
        <div className="name_icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="f_name">
          <span>Email</span>
          <h5>{nextData.companyemail}</h5>
        </div>
      </div>
    </div>
  </div>
</div>
</>
)} 
    
        
      </Drawer>
    </>
  );
};

export default EmployeeCard;
