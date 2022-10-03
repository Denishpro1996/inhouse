import * as React from "react";
import { Link } from "react-router-dom";
// card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// Icons
import CallIcon from "@mui/icons-material/Call";
import { useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
// Drawer
import Button from "@mui/material/Button";


const Attendance = () => {
  const [show, setShow] = useState([]); //For API

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

  return (
    <div className="EmployeeCard">
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
                <Link 
                to='/people/attendance/calender'
                style={{textDecoration: 'none'}}
                 >
                <Button
                  size="small"
                  style={{ color: "white",width:'100%' }}
                  onClick={() => DrawerOpen(currValue)}
                >
                  Attendance
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Attendance;
