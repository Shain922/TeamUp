import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Card,
} from "@mui/material";

const SignUp = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {/* left side: Welcome Text */}
          <Grid marginTop={10} item xs={12} sm={6} textAlign={"center"}>
            <Typography variant="h4" marginY={3}>
              Let's get started on this exciting journey together!
            </Typography>
            <Typography variant="body1">
              Streamline your day, boost productivity, and achieve your goals
              effortlessly.
            </Typography>
          </Grid>
          {/* right side: Login Form */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ p: 3 }}>
              <form autoComplete="false">
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      required
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
                      <Link href={"/login"}>
                        {"All ready have an account ? Sign In"}
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignUp;
