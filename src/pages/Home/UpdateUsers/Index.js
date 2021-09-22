import {
  Button,
  CardContent,
  CssBaseline,
  Grid,
  Input,
  InputLabel,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import Card from "@mui/material/Card";
import { Box, width } from "@mui/system";
import { FormControl } from "@mui/material";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../../app/Actions/addUser";

const Index = ({ match }) => {
  const userid = match.params.id;
  console.log(userid);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [roles, setRoles] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const userDatafromState = useSelector((state) => state.addUserReducer);
  const { users } = userDatafromState;

  console.log(users);

  let upUser = users.find((user) => {
    return user.id === userid;
  });

  const updatedUser = {
    id: userid,
    type: type ? type : upUser.type,
    name: name ? name : upUser.name,
    email: email ? email : upUser.email,
    phone: phone ? phone : upUser.phone,
    roles: roles ? roles : upUser.roles,
    status: status ? status : upUser.status,
    addedBy: "asdad",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };

  console.log(updatedUser);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(updatedUser));
    console.log(name + email + phone + roles);
  };
  return (
    <div>
      {upUser && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h3">Update User</Typography>
          <hr />
          <Card>
            <CardContent>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minWidth: "50vw" }}
              >
                <form type="submit" onSubmit={formHandler}>
                  <Grid item xs={12}>
                    <FormControl>
                      <InputLabel>Name</InputLabel>
                      <Input
                        type="text"
                        defaultValue={upUser.name}
                        placeholder=""
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sx={{ m: 3 }}>
                    <FormControl>
                      <InputLabel>Email</InputLabel>
                      <Input
                        defaultValue={upUser.email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sx={{ m: 3 }}>
                    <FormControl>
                      <InputLabel>Phone</InputLabel>
                      <Input
                        defaultValue={upUser.phone}
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl>
                      <InputLabel>Roles</InputLabel>
                      <Input
                        defaultValue={upUser.roles}
                        type="text"
                        onChange={(e) => setRoles(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl>
                      <InputLabel sx={{ mt: 3 }} required>
                        Types
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={upUser.type}
                        label="types"
                        sx={{ minWidth: "11vw", mt: 3 }}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <MenuItem value="super">Super Admin</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="a">A</MenuItem>
                        <MenuItem value="b">B</MenuItem>
                        <MenuItem value="c">C</MenuItem>
                        <MenuItem value="d">D</MenuItem>
                        <MenuItem value="e">E</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl>
                      <InputLabel sx={{ mt: 3 }} required>
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={upUser.status}
                        label="status"
                        sx={{ minWidth: "11vw", mt: 3 }}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="enable">Enable</MenuItem>
                        <MenuItem value="disable">Disable</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    sx={{ m: 5 }}
                  >
                    Update
                  </Button>
                </form>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      )}
    </div>
  );
};

export default Index;
