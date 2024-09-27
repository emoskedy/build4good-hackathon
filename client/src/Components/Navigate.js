import React from "react";
import { Link } from "react-router-dom";
import "./Navigate.css";
import { Typography } from "@mui/material";
// import { useTheme } from "@mui/material/styles";

const NavigateBar = () => {
  // const theme = useTheme();
  // const textStyle = {
  //   color: theme.palette.text.primary,
  //   variant: theme.typography.h1,
  // };

  return (
    <nav color="secondary" id="navBar">
      <Link className="navLink" to="/">
        <Typography className="NavigateOption" variant="h2" color={"primary"}>
          Home
        </Typography>
      </Link>

      <Link color="secondary" className="navLink" to="/admin">
        <Typography className="NavigateOption" variant="h2" color={"primary"}>
          Admin
        </Typography>
      </Link>
    </nav>
  );
};

export default NavigateBar;
