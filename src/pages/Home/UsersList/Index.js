import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  TextField,
  Typography,
  Button,
  Alert,
  AlertTitle,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";
import { deleteUser } from "../../../app/Actions/addUser";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Index = () => {
  const [username, setUsername] = useState("");
  const userDataFromState = useSelector((state) => state.addUserReducer);
  const { users } = userDataFromState;
  // const userState = JSON.parse(localStorage.getItem("Users"));
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  let filteredUsers;
  //filtering users
  if (search) {
    filteredUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.phone.toLowerCase().includes(search)
      );
    });
  } else {
    filteredUsers = users;
  }

  return (
    <div>
      <Link to="/addnewuser" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained">
          Add New User
        </Button>
      </Link>
      <Typography sx={{ mt: 3 }} variant="h3">
        Users List[{filteredUsers.length}]
      </Typography>
      <TextField
        id="standard-basic"
        label="Search Users By Name/Email/Phone Number"
        variant="standard"
        sx={{ width: "40%" }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length > 0 ? (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Roles</StyledTableCell>
                <StyledTableCell>AddedBy</StyledTableCell>
                <StyledTableCell>CreatedAt</StyledTableCell>
                <StyledTableCell>UpdatedAt</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers &&
                filteredUsers.map((user) => {
                  return (
                    <StyledTableRow key={user.name}>
                      <StyledTableCell>{user.type}</StyledTableCell>
                      <StyledTableCell>{user.name}</StyledTableCell>
                      <StyledTableCell>{user.email}</StyledTableCell>
                      <StyledTableCell>{user.phone}</StyledTableCell>
                      <StyledTableCell>{user.roles}</StyledTableCell>
                      <StyledTableCell>{user.addedBy}</StyledTableCell>
                      <StyledTableCell>{user.createdAt}</StyledTableCell>
                      <StyledTableCell>{user.updatedAt}</StyledTableCell>
                      <StyledTableCell>
                        {user.status === "enable" ? (
                          <span style={{ color: "green" }}>Enabled</span>
                        ) : (
                          <span style={{ color: "red" }}>Disabled</span>
                        )}
                      </StyledTableCell>

                      <Link to={`/updateuser/${user.id}`}>
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={() => {
                          console.log("delete pressed");
                          setUsername(user.name);
                          console.log(user.name);
                          dispatch(deleteUser(user.id));
                        }}
                      >
                        <DeleteIcon sx={{ color: pink[500] }} />
                      </IconButton>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Alert
            style={{
              width: "50vw",
              justifyContent: "center",
              margin: "15px",
            }}
            variant="filled"
            severity="warning"
          >
            No Users Found.
          </Alert>
        </Grid>
      )}
    </div>
  );
};

export default Index;
