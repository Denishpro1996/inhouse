import React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "../../../styles/custom.css"

const AddNew = () => {
  return (
    <div className="addtonew_btn">
      <Button variant="contained" size="small" className="add_new">
        <AddCircleOutlineIcon /> Add New
      </Button>
    </div>
  );
};
export default AddNew;
