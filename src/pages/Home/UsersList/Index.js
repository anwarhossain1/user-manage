import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  const userDataFromState = useSelector((state) => state.addUserReducer);
  const { users } = userDataFromState;
  // const userState = JSON.parse(localStorage.getItem("Users"));

  return (
    <div>
      UsersList
      {users.length}
      <TableContainer component={Paper}>
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
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => {
                return (
                  <StyledTableRow key={user.id}>
                    <StyledTableCell>{user.id}</StyledTableCell>
                    <StyledTableCell>{user.name}</StyledTableCell>
                    <StyledTableCell>{user.email}</StyledTableCell>
                    <StyledTableCell>{user.phone}</StyledTableCell>
                    <StyledTableCell>{user.roles}</StyledTableCell>
                    <StyledTableCell>{user.addedBy}</StyledTableCell>
                    <StyledTableCell>{user.createdAt}</StyledTableCell>
                    <StyledTableCell>{user.updatedAt}</StyledTableCell>
                    <StyledTableCell>Ache kisu</StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Index;
