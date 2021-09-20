import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Index = () => {
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DurBinLab-Test
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Index;
