import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = (e) => {
    e.preventDefault();

    if (email === "super@gmail.com" && password === "1234") {
      window.location.href = "/";
    } else {
      alert("Enter Inputs From Placeholders");
    }
  };
  return (
    <div>
      <form type="submit" onSubmit={formHandler}>
        <Grid
          sx={{ mt: 20 }}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Typography variant="h5">Login</Typography>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-basic"
              label="Email"
              variant="outlined"
              placeholder="super@gmail.com"
              sx={{ mt: 2 }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ mt: 2 }}
              placeholder="1234"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            sx={{ mt: 3, minWidth: "13vw" }}
          >
            Login
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
