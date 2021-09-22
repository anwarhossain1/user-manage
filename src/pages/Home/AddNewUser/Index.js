import {
  Button,
  CardContent,
  CssBaseline,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { Box, width } from "@mui/system";
import { FormControl } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../../../app/Actions/addUser";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [roles, setRoles] = useState("");
  const [type, setType] = useState("");
  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (name !== "" && email !== "" && phone !== "" && roles !== "") {
      setOpen(true);
    } else {
      alert("Please Input All Of The Fields");
    }
  };
  const handleClose = () => {
    setOpen(false);
    window.location.href = "/";
  };
  const dispatch = useDispatch();
  const newUser = {
    id: uuidv4(),
    type: type,
    name: name,
    email: email,
    phone: phone,
    roles: roles,
    addedBy: "asdad",
    status: "enable",
    createdAt: new Date().toISOString().substring(0, 10),
    updatedAt: new Date().toISOString().substring(0, 10),
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
              style={{ minHeight: "50vh" }}
            >
              <form type="submit" onSubmit={formHandler}>
                <Grid item xs={12}>
                  <FormControl>
                    <InputLabel required>Name</InputLabel>
                    <Input
                      required
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ m: 3 }}>
                  <FormControl>
                    <InputLabel required>Email</InputLabel>
                    <Input
                      required
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ m: 3 }}>
                  <FormControl>
                    <InputLabel required>Phone</InputLabel>
                    <Input
                      required
                      type="number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <InputLabel required>Roles</InputLabel>
                    <Input
                      required
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
                      value={type}
                      label="types"
                      sx={{ minWidth: "10vw", mt: 3 }}
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
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    color="warning"
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mr: 1, minWidth: "6vw" }}
                  >
                    Go Home
                  </Button>
                </Link>
                <Button
                  color="success"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 5, minWidth: "6vw" }}
                  onClick={handleOpen}
                >
                  Save
                </Button>
              </form>
            </Grid>
          </CardContent>
        </Card>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              User Added Successfully
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              User Successfullt Added To The Storage.
            </Typography>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default Index;
