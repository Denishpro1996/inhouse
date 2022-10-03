import React from "react";
import "../../../../styles/custom.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ApplicationTable = () => {
  const [show, setShow] = useState([]);


  const tableData = async () => {  //Get Data Api
    try {
      const resp = await fetch("http://192.168.1.96:4500/application/show");
      const actualData = await resp.json();
      setShow(actualData);
    } catch (err) {}
  };
  useEffect(() => {
    tableData();
  }, []);
  
  function deleteUser(id) { //Delete user
    console.log(id);
    fetch(`http://192.168.1.96:4500/application/delete/${id}`, {
      method: "GET",
    }).then((result) => {
      console.log(result);
      tableData();
    });
  }

  return (
    <div className="appTable">
      <table className="app_table">
        <thead>
          <tr className="table_row">
            <th>
              <td>Delete/Update</td>
              <td>Project Id</td>
              <td>Appplied By</td>
              <td>Application Date</td>
              <td>Project Name</td>
              <td>Technology</td>
              <td>Platform</td>
              <td>Link</td>
              <td>Location</td>
              <td>Rate</td>
            </th>
          </tr>

          {show.map((currValue, index) => {
            return (
              <tr className="tr_row" key={index}>
                <td>
                  <DeleteIcon
                    onClick={() => deleteUser(currValue.projectid)}
                    className="delete_icon"
                  />
                  <Link to='/applicationform' 
                  style={{textDecoration: 'none',color: 'white'}} 
                  state={{data:currValue}} >
                  <EditIcon
                    className="delete_icon"
                  />
                  </Link>
                </td>
                <td> {currValue.projectid}</td>
                <td> {currValue.appliedby}</td>
                <td> {currValue.applicationdate}</td>
                <td> {currValue.projectname}</td>
                <td> {currValue.rate}</td>
                <td> {currValue.technology}</td>
                <td> {currValue.platform}</td>
                <td> {currValue.link}</td>
                <td> {currValue.location}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};
export default ApplicationTable;
