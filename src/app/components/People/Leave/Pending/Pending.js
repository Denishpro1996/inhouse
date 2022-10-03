import React, { useState } from "react";
import "./Pending.css";
import LeaveReason from "./LeaveReason";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";

const Pending = () => {
  return (
    <>
      <div className="pending_partent">
        <div className="pending_child">
          <LeaveReason />
          <LeaveReason />
        </div>

        <div className="On_leave">
          {/* ===========Header================================ */}
          <div className="_onleave_header">
            <div className="_onleavrheader_child">
              <PersonIcon className="_userLogo" /> <h3>Who's On Leave </h3>
            </div>
          </div>
          {/* ======today ===== */}
          <div className="today_onleave_parent">
            <p className="month_text">Today</p>
            <div className="_todayleave_child">

            <div className="_pc">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="_todayleave_parent_ avtar"
                />
              </div>
              <div className="_todayleave_employeedetail">
                <h4>Employee 1</h4>
                <p>UI Designer</p>
              </div>
              </div>
            </div>
          </div>
          {/* ==================Weekly==================== */}
          <div className="today_onleave_parent">
            <p className="month_text">This Week</p>
            <div className="_todayleave_child">
              <div className="_pc">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="_todayleave_parent_ avtar"
                />
              </div>
              <div className="_todayleave_employeedetail">
                <h4>Employee 1</h4>
                <p>UI Designer</p>
              </div>
              </div>
              <div className="_pc">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="_todayleave_parent_ avtar"
                />
              </div>
              <div className="_todayleave_employeedetail">
                <h4>Employee 1</h4>
                <p>UI Designer</p>
              </div>
              </div>
            </div>
          </div>

          {/* ========================Monthly =================*/}
          <div className="today_onleave_parent">
            <p className="month_text">This Month</p>
            <div className="_todayleave_child">
              <div className="_pc">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="_todayleave_parent_ avtar"
                />
              </div>
              <div className="_todayleave_employeedetail">
                <h4>Employee 1</h4>
                <p>UI Designer</p>
              </div>
              </div>

              <div className="_pc">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="_todayleave_parent_ avtar"
                />
              </div>
              <div className="_todayleave_employeedetail">
                <h4>Employee 1</h4>
                <p>UI Designer</p>
              </div>
              </div>

              <div className="_pc">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="_todayleave_parent_ avtar"
                />
              </div>
              <div className="_todayleave_employeedetail">
                <h4>Employee 1</h4>
                <p>UI Designer</p>
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Pending;
