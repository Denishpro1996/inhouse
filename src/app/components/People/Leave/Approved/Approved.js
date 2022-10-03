import React from "react";
import './Approved.css'
import Avatar from "@mui/material/Avatar";

const Approved = () => {
  return (
    <div className="_approved_parent">
      <div className="_approved_child">
        <h3>APPROVED LEAVES</h3>
        <div className="_approved_table_container">
          <table className="_approved_table">
            <tr>
              <th>Employee Name</th>
              <th>Role</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Total Days</th>
            </tr>
            <tr>
              <td className="text_center">
                <div>
                  <Avatar alt="Cindy Baker" className="_approved_avtar" src="/static/images/avatar/3.jpg" />
                </div>
                <p>Employee 1</p>
              </td>
              <td>UI/UX Designer</td>
              <td>Sick/Casual</td>
              <td>00-00-0000</td>
              <td>00-00-0000</td>
              <td>00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Approved;
Approved;
