import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import AddNewUser from "./AddNewUser/Index";
import UpdateUser from "./UpdateUsers/Index";
import UsersList from "./UsersList/Index";
const Index = () => {
  return (
    <div>
      <Box sx={{ m: 4 }}>
        <Button sx={{ backgroundColor: "black" }}>Add New User</Button>

        <Switch>
          <Route path="/addnewuser" component={AddNewUser} />
          <Route path="/updateuser" component={UpdateUser} />
          <Route path="/" active component={UsersList} />
        </Switch>
      </Box>
    </div>
  );
};

export default Index;
