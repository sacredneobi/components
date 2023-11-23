import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

const Default = (props) => {
  const { ...other } = props;

  return <CssBaseline {...other} />;
};

export default Default;
