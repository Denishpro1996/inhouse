import React from 'react'
import { useState } from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded"; //left arrow
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"; //right arrow
import './Pending.css'

let i = 0;
const LeaveReason = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [startmonth, setstartMonth] = useState(months[i]);    // useState for month change(start date)
  const [endmonth, setendMonth] = useState(months[i]);         // useState for month change(end date)

  // =====Start date
  // =====Next
  const nextMonth = () => {   
    if (i <= (months.length-1)) {
      i++;
    } else {
      i = 0;
    }
    setstartMonth(months[i]);
    console.log(months)
  };
  // =====Prev
  const prevMonth = () => {
    if (i >= 0) {
      i--;
    } else {
      i = 11;
    }
    setstartMonth(months[i]);
  };
  
  const endMonthNext = () => {
    if (i <= 11) {
      i++;
    } else {
      i = 0;
    }
    setendMonth(months[i]);
  };
  const endMonthPrev = () => {
    if (i >= 0) {
      i--;
    } else {
      i = 11;
    }
    setendMonth(months[i]);
  };
  return (
    <div className="leave_reason_container">
       <div className="leaveappp_container_parent">
        <div className="avtar_employeedetails">
          <Stack direction="row" spacing={2} className="pending_avtar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
          <div className="pending_epmloyee_details">
            <h2>Employee Name</h2>
            <ul className="pending_ul">
              <li>Design Team</li>
              <li>Ui Designer</li>
            </ul>
          </div>
        </div>
        {/* =============================== */}
        <div className="month_selector">
          <div className="start_month">
            <div className="month_slider">
              <ChevronLeftRoundedIcon
                className="_pending_arrow"
                onClick={prevMonth}
              />
              <p className="_month">{startmonth}</p>
              <ChevronRightRoundedIcon
                className="_pending_arrow"
                onClick={nextMonth}
              />
            </div>
            <p>date</p>
          </div>
          <div className="_to">-------</div>
          <div className="start_month">
            <div className="month_slider">
              <ChevronLeftRoundedIcon
                className="_pending_arrow"
                onClick={endMonthPrev}
              />
              <p className="_month">{endmonth}</p>
              <ChevronRightRoundedIcon
                className="_pending_arrow"
                onClick={endMonthNext}
              />
            </div>
            <p>date</p>
          </div>

          {/* ========================================== */}
        </div>
        <div className="leave_rsn_parent">
          <div className="leave_rsn_child">
            <div className="leave_header">
              <div className="leave">Sick Leave</div>
              <div className="date">Date</div>
            </div>

            <div className="leave_reason">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quis autem a aperiam temporibus quisquam minus maxime
                mollitia est tempore! Rerum aliquid cupiditate autem voluptates!
              </div>
            </div>
          </div>
        </div>
        <div className="buttons_">
          <div className="buttons">
            <div style={{width:'50%'}}> 
            <Button variant="contained" className="_pending_btn1">Approved</Button>
            </div>
            <div style={{width:'50%',textAlign:'right'}}>
            <Button variant="contained" className="_pending_btn2">Rejected</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaveReason;
