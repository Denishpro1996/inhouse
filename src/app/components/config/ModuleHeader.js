import React from "react";
import "../../../styles/custom.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const ModuleHeader = () => {
  return (
    <div className="marketing">
      <div className="header">
        <h1 className="marketing_h1">Marketing</h1>
         <div className="header_searchbar">
        {/*  <input
            type="search"
            placeholder="Search"
            className="search_bar_field"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="search_icon">
            <i className="fas fa-search search_icon "></i>
          </span>
        </div> */} <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 ,borderRadius: '0.625rem'}}
    >
      <InputBase
               style={{borderRadius:"none"}}

         sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search google maps' }}

      /> <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
   
  </Paper>
      </div>
    </div>
    </div>
  );
};

export default ModuleHeader;
