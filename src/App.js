import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LogoGenerator from "./LogoGenerator";
import {
  Alert,
  AppBar,
  Box,
  Button,
  ImageList,
  Skeleton,
  Toolbar,
} from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

function App() {
  const [showLogos, show] = useState({
    active: false,
    companyName: "",
    slogan: "",
    error: "",
    showError: false,
  });
  const [state, setState] = useState({
    companyName: "",
    slogan: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    show({
      ...showLogos,
      active: false,
      companyName: "",
      slogan: "",
    });
  };
  const handleShow = (e) => {
    if (state.companyName.length === 0) {
      show({
        ...showLogos,
        active: false,
        companyName: "",
        slogan: "",
        showError: true,
        error: "Enter Company Details",
      });
    } else {
      show({
        ...showLogos,
        active: true,
        companyName: state.companyName,
        slogan: state.slogan,
        showError: false,
        error: "",
      });
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
            >
              Logo Generator
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div align="center">
        <Typography
          variant="h2"
          align="center"
          style={{ marginTop: "80px", fontStyle: "bold" }}
        >
          Enter Company Details
        </Typography>
        <Typography variant="h6" align="center" style={{ margin: "20px" }}>
          You can always change later
        </Typography>

        <form>
          <label>
            <TextField
              style={{ margin: "20px" }}
              label="Company Name"
              type="text"
              name="companyName"
              value={state.companyName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <TextField
              style={{ margin: "20px" }}
              label="Slogan"
              type="text"
              name="slogan"
              value={state.slogan}
              onChange={handleChange}
              required
            />
          </label>
          <Button
            style={{ margin: "20px", height: "56px", width: "195px" }}
            variant="contained"
            endIcon={<ArrowRightAltOutlinedIcon />}
            size="large"
            onClick={handleShow}
          >
            Create
          </Button>
        </form>
        {showLogos.active ? (
          <LogoGenerator
            CompanyName={showLogos.companyName}
            slogan={showLogos.slogan}
          />
        ) : (
          <div align="center">
            {showLogos.showError ? (
              <Alert
                severity="error"
                style={{
                  position: "fixed",
                  top: "80px",
                  right: "20px",
                  width: "400px",
                  zIndex: "9999",
                  borderRadius: "10px",
                }}
              >
                {showLogos.error}
              </Alert>
            ) : (
              ""
            )}
            <ImageList sx={{ width: 1200 }} cols={3} rowHeight={300} gap={20}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </ImageList>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
