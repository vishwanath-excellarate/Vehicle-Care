import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CustomCard from "../vdcomponents/CustomCard";

const customInputSxStyle = {
  width: "80%",
  my: 1,
  py: 1,
  "& .MuiInputLabel-root.Mui-focused": {
    color: COLORS.black,
  },
};

const customInputLabelProps = {
  sx: {
    color: COLORS.black,
    textTransform: "capitalize",
    fontSize: FONT_SIZE.medium,
    letterSpacing: 0.4,
  },
};

const inputProps = {
  style: {
    color: COLORS.black,
    fontSize: FONT_SIZE.medium,
    letterSpacing: 0.4,
  },
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isConfirmPassword, setisConfirmPassword] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
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
          height: "70%",
          borderRadius: 4,
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
          Sign Up
        </Typography>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "92%",
          }}
        >
          <TextField
            id="input-with-icon-textfield"
            label="First Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ ...customInputSxStyle, width: "40%" }}
            InputLabelProps={customInputLabelProps}
            inputProps={inputProps}
            value={signUpDetails.firstName}
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, firstName: e.target.value })
            }
          />
          <TextField
            id="input-with-icon-textfield"
            label="Last Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ ...customInputSxStyle, width: "40%" }}
            InputLabelProps={customInputLabelProps}
            inputProps={inputProps}
            value={signUpDetails.lastName}
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, lastName: e.target.value })
            }
          />
        </Container>
        <TextField
          id="input-with-icon-textfield"
          label="Phone No."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          sx={customInputSxStyle}
          InputLabelProps={customInputLabelProps}
          inputProps={inputProps}
          value={signUpDetails.phoneNo}
          onChange={(e) =>
            setSignUpDetails({ ...signUpDetails, phoneNo: e.target.value })
          }
        />
        <TextField
          id="input-with-icon-textfield"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          sx={customInputSxStyle}
          InputLabelProps={customInputLabelProps}
          inputProps={inputProps}
          value={signUpDetails.email}
          onChange={(e) =>
            setSignUpDetails({ ...signUpDetails, email: e.target.value })
          }
        />
        <TextField
          id="input-with-icon-textfield"
          label="password"
          type={showPassword ? "text" : "password"}
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
          sx={customInputSxStyle}
          InputLabelProps={customInputLabelProps}
          inputProps={inputProps}
          value={signUpDetails.password}
          onChange={(e) =>
            setSignUpDetails({ ...signUpDetails, password: e.target.value })
          }
        />
        <TextField
          id="input-with-icon-textfield"
          type={isConfirmPassword ? "text" : "password"}
          label="Confirm Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setisConfirmPassword(!isConfirmPassword)}
                >
                  {isConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="standard"
          sx={customInputSxStyle}
          InputLabelProps={customInputLabelProps}
          inputProps={inputProps}
          value={signUpDetails.confirmPassword}
          onChange={(e) =>
            setSignUpDetails({
              ...signUpDetails,
              confirmPassword: e.target.value,
            })
          }
        />
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
        >
          Sign Up
        </Button>
        <Typography
          sx={{
            fontSize: FONT_SIZE.medium,
            letterSpacing: 0.3,
            textAlign: "center",
          }}
        >
          {"Already have an account?"}{" "}
          <Link
            href="/login"
            color={'primary'}
            underline={"always"}
            sx={{
              fontSize: FONT_SIZE.medium,
              letterSpacing: 0.3,
            }}
          >
            Login
          </Link>
        </Typography>
      </CustomCard>
    </Container>
  );
};

export default SignUp;
