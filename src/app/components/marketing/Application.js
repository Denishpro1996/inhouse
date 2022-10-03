import React from "react";
import "../../../styles/custom.css";
import ApplicationTable from "../../components/tables/marketingtable/ApplicationTable";

const Application = () => {
  return (
    <div>
      <div className="app_addnew_main"></div>
      <div>
        <ApplicationTable />
      </div>
    </div>
  );
};

export default Application;
