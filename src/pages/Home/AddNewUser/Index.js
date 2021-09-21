import {
  Button,
  CardContent,
  CssBaseline,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { Box, width } from "@mui/system";
import { FormControl } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../../../app/Actions/addUser";
const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [roles, setRoles] = useState("");
  const dispatch = useDispatch();
  const newUser = {
    id: uuidv4(),
    name: name,
    email: email,
    phone: phone,
    roles: roles,
    addedBy: "asdad",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(newUser));
    console.log(name + email + phone + roles);
  };
  return (
    <div>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h3">Add New User</Typography>
        <hr />
        <Card style={{ overflow: "visible" }}>
          <CardContent>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "100vh" }}
            >
              <form type="submit" onSubmit={formHandler}>
                <Grid item xs={12}>
                  <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ m: 3 }}>
                  <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ m: 3 }}>
                  <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input
                      type="number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <InputLabel>Roles</InputLabel>
                    <Input
                      type="text"
                      onChange={(e) => setRoles(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  sx={{ m: 5 }}
                >
                  Save
                </Button>
              </form>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Index;
