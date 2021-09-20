import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">DurBinLab-Test</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Index;
