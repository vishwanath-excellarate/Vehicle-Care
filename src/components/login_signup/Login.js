import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { COLORS } from "../themes/Colors";
import { FONT_SIZE } from "../themes/FontSize";
import CustomCard from "../vdcomponents/CustomCard";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LOGIN_SCREEN_LOGO } from "../assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const customInputSxStyle = {
  width: "80%",
  my: 2,
  py: 1,
  "& .MuiInputLabel-root.Mui-focused": {
    color: COLORS.black,
  },
};

const customInputLabelProps = {
  sx: {
    color: COLORS.black,
    textTransform: "capitalize",
    fontSize: FONT_SIZE.extraLarge,
    letterSpacing: 0.4,
  },
};

const inputProps = {
  style: {
    color: COLORS.black,
    fontSize: FONT_SIZE.large,
    letterSpacing: 0.4,
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        background: COLORS.LINEAR_GRAD,
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomCard
        maxWidth={"md"}
        style={{
          backgroundColor: COLORS.white,
          height: "60%",
          borderRadius: 4,
        }}
      >
        <Grid container>
          <Grid
            item
            // xs={0}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component={"img"}
              src={LOGIN_SCREEN_LOGO}
              sx={{ width: "82%", height: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              //   backgroundColor:'red',
            }}
          >
            <Typography
              sx={{
                fontSize: 30,
                color: COLORS.black,
                fontWeight: "bold",
                letterSpacing: 0.3,
                my: 3,
              }}
            >
              Login
            </Typography>
            <TextField
              id="input-with-icon-textfield"
              label="Username/ Phone no."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              sx={customInputSxStyle}
              InputLabelProps={customInputLabelProps}
              inputProps={inputProps}
              value={loginDetails.userName}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, userName: e.target.value })
              }
            />
            <TextField
              id="input-with-icon-textfield"
              type={showPassword ? "text" : "password"}
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
              sx={{ ...customInputSxStyle, my: 1 }}
              InputLabelProps={customInputLabelProps}
              inputProps={inputProps}
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
            <Link
              href="#"
              color={"inherit"}
              underline={"none"}
              sx={{
                fontSize: FONT_SIZE.extraSmall,
                letterSpacing: 0.3,
                textAlign: "right",
                width: "80%",
              }}
            >
              Forgot Username/ Password ?
            </Link>
            <Button
              variant="outlined"
              sx={{
                width: "80%",
                height: 46,
                my: 4,
                background: COLORS.LINEAR_GRAD,
                color: COLORS.white,
                fontSize: FONT_SIZE.large,
                textTransform: "capitalize",
                letterSpacing: 0.4,
                borderWidth: 0,
              }}
              onClick={() => {
                toast.success("login successfull");
                navigate("/user-dashboard");
              }}
            >
              Login
            </Button>
            <Link
              href="/signup"
              color={"primary"}
              underline={"always"}
              sx={{
                fontSize: FONT_SIZE.medium,
                letterSpacing: 0.3,
              }}
            >
              Create Your Account
            </Link>
          </Grid>
        </Grid>
      </CustomCard>
    </Container>
  );
};

export default Login;
