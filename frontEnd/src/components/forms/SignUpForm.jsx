import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [error, setError] = useState("fazal");
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    userType: "",
  });
  const navigate = useNavigate();

  const handleChangeData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeUserType = (event) => {
    setUserType(event.target.value);
    setFormData({ ...formData, userType: event.target.value }); // Update userType in formData
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // register function here
    console.log("Form submitted:", formData);
    navigate("/login");
  };
  return (
    <>
      <form autoComplete="false" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h5">Sign Up</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="User Name"
              variant="outlined"
              type="user name"
              fullWidth
              required
              name="userName"
              value={formData.userName}
              onChange={handleChangeData}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="normal">
              <InputLabel id="demo-select-small-label">UserType</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={userType}
                onChange={handleChangeUserType}
                label="UserType"
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Member"}>Member</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChangeData}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              value={formData.password}
              onChange={handleChangeData}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{ height: "45px" }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <em>
                All ready have an account ?
                <Link href={"/login"}> Sign In </Link>
              </em>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignUpForm;
