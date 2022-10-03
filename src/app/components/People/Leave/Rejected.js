import React from "react";
import "./Rejected.css";
import Avatar from "@mui/material/Avatar";

const Rejected = () => {
  return (
    <div className="_rtbp_">
      <div className="_rtbc_">
        <h3>REJECTED LEAVES</h3>
      </div>

      <div className="_rtbt_">
        <table className="_rejected_table">
          <tr className="_rtbt_row">
            <th>Employee Name</th>
            <th>Role</th>
            <th>Leave Type</th>
            <th>Reason Type</th>
          </tr>
          <tr className="_rtbt_row">
            <td className="_rtbt_td">
              <div>
                <Avatar
                  alt="Cindy Baker"
                  className="_approved_avtar"
                  src="/static/images/avatar/3.jpg"
                />
              </div>
              <p>Employee 1</p>
            </td>
            <td className="_rtbt_td">UI/UX Designer</td>
            <td className="_rtbt_td">Sick/Casual</td>
            <td className="_rtbt_td_rsn">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, a.</td>
          </tr>
          <tr className="_rtbt_row">
            <td className="_rtbt_td">
              <div>
                <Avatar
                  alt="Cindy Baker"
                  className="_approved_avtar"
                  src="/static/images/avatar/3.jpg"
                />
              </div>
              <p>Employee 2</p>
            </td>
            <td className="_rtbt_td">Web Devlopment</td>
            <td className="_rtbt_td">Sick/Casual</td>
            <td className="_rtbt_td_rsn">Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Rejected;
