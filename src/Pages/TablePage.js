import React from "react";
import { Typography, Button } from "@mui/material";
import "./TablePage.css";
const TablePage = () => {
  return (
    <div className="main-page">
      <Typography variant="h4" component="div">
        Orders
      </Typography>

      <div>
        <Button variant="contained" sx={{ backgroundColor: "#0437F2" }}>
          Create New
        </Button>
      </div>
    </div>
  );
};

export default TablePage;
