import React from "react";
import "../../../../styles/custom.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import { useSelector } from "react-redux";
import {useState,useEffect} from 'react' 
import { Link } from "react-router-dom";

const InquiryTable = () => {
  // const data = useSelector((state) => state.fuse.Inquiry);
const [show,setShow] = useState([]);

const tableData = async () => {
  try {
    const resp = await fetch("http://192.168.1.96:4500/inquiry/show");
    const actualData = await resp.json();
    // console.log(actualData);
    setShow(actualData);
  } catch (err) {}
};
useEffect(() => {
  tableData();
}, []);


    //Delete Function

    function deleteUser(id){
      fetch(`http://192.168.1.96:4500/inquiry/delete/${id}`,{
        method:'GET',
      }).then((result)=>{
        tableData()
      })
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

          {show.map((currValue,index) => {
            return (
              <tr className="tr_row" key={index}>
                <td>
                  <DeleteIcon  className='delete_icon' onClick={() =>deleteUser(currValue.inquiryid)}/>
                  <Link to='/updateInquiryDetails' state={{data:currValue}}>
                   <EditIcon  className='delete_icon'  style={{color:'white'}} />
                   </Link>
                </td>
                <td> {currValue.inquiryid}</td>
                <td> {currValue.appliedby}</td>
                <td> {currValue.applicationdate}</td>
                <td> {currValue.projectname}</td>
                <td> {currValue.technology}</td>
                <td> {currValue.platform}</td>
                <td> {currValue.link}</td>
                <td> {currValue.location}</td>
                <td> {currValue.rate}</td> <br />
              </tr>
            );
          })}



        </thead>
      </table>
    </div>
  );
};
export default InquiryTable;
