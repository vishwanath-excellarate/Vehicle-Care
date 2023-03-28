import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import {
  SERVICE_HISTORY_CONSTANT,
  SERVICE_HISTORY_DATA,
  TAB_NAMES,
} from "../../constants/commonString";
import { COLORS } from "../../themes/Colors";
import { fontStyle } from "../../themes/Styles";
import CustomCard from "../../vdcomponents/CustomCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import CustomInput from "../../vdcomponents/CustomInput";
import { FONT_SIZE } from "../../themes/FontSize";
import CustomTable from "../../vdcomponents/CustomTable";

const Profile = () => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [profileInfo, setProfileInfo] = useState({
    profileImg: "",
    fName: "",
    lName: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
    addressProf: "",
  });

  const customInputSxStyle = {
    borderBottom: `1px solid ${COLORS.white}`,
    color: COLORS.white,
    "& .MuiInputLabel-root.Mui-focused": {
      color: COLORS.white,
    },
  };

  const customInputLabelProps = {
    sx: {
      color: COLORS.white,
      textTransform: "capitalize",
    },
  };

  const inputProps = { style: { color: "white" } };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setProfileInfo({ ...profileInfo, fName: value });
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setProfileInfo({ ...profileInfo, lName: value });
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setProfileInfo({ ...profileInfo, email: value });
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setProfileInfo({ ...profileInfo, phoneNo: value });
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setProfileInfo({ ...profileInfo, address: value });
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    setProfileInfo({ ...profileInfo, city: value });
  };

  return (
    <Container maxWidth={false} sx={{ display: "flex" }}>
      <Typography sx={{ ...fontStyle() }}>Profile</Typography>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CustomCard maxWidth={"md"} style={{ padding: 20 }}>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {!profileInfo.profileImg ? (
                <>
                  <AccountCircleIcon
                    sx={{ fontSize: 120, color: COLORS.white }}
                  />
                  <Typography sx={{ ...fontStyle(undefined, 20, undefined) }}>
                    Upload Photo
                  </Typography>
                </>
              ) : (
                <img
                  src={profileInfo.profileImg}
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    objectFit: "contain",
                  }}
                />
              )}
              <input
                type="file"
                accept="image/png, image/jpeg"
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                onChange={(e) =>
                  setProfileInfo({
                    ...profileInfo,
                    profileImg:
                      e.target.value && URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
            </div>
          </Container>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <CustomInput
              margin="normal"
              required
              fullWidth={false}
              label="First Name"
              name="fName"
              variant="standard"
              value={profileInfo.fName}
              onChange={(event) => handleFirstNameChange(event)}
              sx={customInputSxStyle}
              InputLabelProps={customInputLabelProps}
              inputProps={inputProps}
            />
            <CustomInput
              margin="normal"
              required
              fullWidth={false}
              label="Last Name"
              name="lName"
              variant="standard"
              value={profileInfo.lName}
              onChange={(event) => handleLastNameChange(event)}
              sx={customInputSxStyle}
              InputLabelProps={customInputLabelProps}
              inputProps={inputProps}
            />
          </Container>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <CustomInput
              margin="normal"
              required
              fullWidth={false}
              label="Email"
              name="email"
              variant="standard"
              value={profileInfo.email}
              onChange={(event) => handleEmailChange(event)}
              sx={customInputSxStyle}
              InputLabelProps={customInputLabelProps}
              inputProps={inputProps}
            />
            <CustomInput
              margin="normal"
              required
              fullWidth={false}
              label="Phone No"
              name="phone"
              variant="standard"
              value={profileInfo.phoneNo}
              onChange={(event) => handlePhoneChange(event)}
              sx={customInputSxStyle}
              InputLabelProps={customInputLabelProps}
              inputProps={inputProps}
            />
          </Container>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <CustomInput
              margin="normal"
              required
              fullWidth={false}
              label="Address"
              name="address"
              variant="standard"
              value={profileInfo.address}
              onChange={(event) => handleAddressChange(event)}
              sx={customInputSxStyle}
              InputLabelProps={customInputLabelProps}
              inputProps={inputProps}
            />
            <CustomInput
              margin="normal"
              required
              fullWidth={false}
              label="City"
              name="city"
              variant="standard"
              value={profileInfo.city}
              onChange={(event) => handleCityChange(event)}
              sx={customInputSxStyle}
              InputLabelProps={customInputLabelProps}
              inputProps={inputProps}
            />
          </Container>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 4,
            }}
          >
            <div
              style={{
                display: "inline-block",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {!profileInfo.addressProf ? (
                <>
                  <ContactEmergencyIcon
                    sx={{ fontSize: 120, color: COLORS.white }}
                  />
                  <Typography sx={{ ...fontStyle(undefined, 20, undefined) }}>
                    Govt Id
                  </Typography>
                </>
              ) : (
                <img
                  src={profileInfo.addressProf}
                  style={{
                    width: 140,
                    height: 140,
                    objectFit: "contain",
                  }}
                />
              )}
              <input
                type="file"
                accept="image/png, image/jpeg"
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                onChange={(e) =>
                  setProfileInfo({
                    ...profileInfo,
                    addressProf:
                      e.target.value && URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
            </div>
          </Container>
          <Button
            variant="outlined"
            sx={{
              width: 180,
              height: 44,
              borderRadius: 2,
              backgroundColor: "#D9D9D95E",
              color: COLORS.white,
              textTransform: "capitalize",
              letterSpacing: 0.4,
              fontSize: FONT_SIZE.medium,
              "&:hover": { backgroundColor: "#D9D9D95E" },
              marginTop: 2,
            }}
          >
            Submit
          </Button>
        </CustomCard>
      </Container>
    </Container>
  );
};

export default Profile;

{
  /* <Container maxWidth={false} sx={{ display: "flex" }}>
        <Typography sx={{ ...fontStyle() }}>Profile</Typography>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CustomCard maxWidth={"md"} style={{ padding: 20 }}>
            <Container
              maxWidth={false}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                hidden
                type="file"
                id="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  // setSelectedImage(event.target.files[0]);
                }}
              />
              <div>
                <AccountCircleIcon
                  sx={{ fontSize: 120, color: COLORS.white }}
                />
              </div>
              <Typography sx={{ ...fontStyle(undefined, 20, undefined) }}>
                Upload Photo
              </Typography>
            </Container>
            <Container
              maxWidth={false}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CustomInput
                margin="normal"
                required
                fullWidth={false}
                label="First Name"
                name="fName"
                variant="standard"
                value={profileInfo.fName}
                onChange={(event) => handleFirstNameChange(event)}
              />
              <CustomInput
                margin="normal"
                required
                fullWidth={false}
                label="Last Name"
                name="lName"
                variant="standard"
                value={profileInfo.lName}
                onChange={(event) => handleLastNameChange(event)}
              />
            </Container>
            <Container
              maxWidth={false}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CustomInput
                margin="normal"
                required
                fullWidth={false}
                label="Email"
                name="email"
                variant="standard"
                value={profileInfo.email}
                onChange={(event) => handleEmailChange(event)}
              />
              <CustomInput
                margin="normal"
                required
                fullWidth={false}
                label="Phone No"
                name="phone"
                variant="standard"
                value={profileInfo.phoneNo}
                onChange={(event) => handlePhoneChange(event)}
              />
            </Container>
            <Container
              maxWidth={false}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CustomInput
                margin="normal"
                required
                fullWidth={false}
                label="Address"
                name="address"
                variant="standard"
                value={profileInfo.address}
                onChange={(event) => handleAddressChange(event)}
              />
              <CustomInput
                margin="normal"
                required
                fullWidth={false}
                label="City"
                name="city"
                variant="standard"
                value={profileInfo.city}
                onChange={(event) => handleCityChange(event)}
              />
            </Container>
            <Container
              maxWidth={false}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 4,
              }}
            >
              <ContactEmergencyIcon sx={{ fontSize: 120, color: COLORS.white }} />
              <Typography sx={{ ...fontStyle(undefined, 20, undefined) }}>
                Govt Id
              </Typography>
            </Container>
            <Button
              variant="outlined"
              sx={{
                width: 180,
                height: 44,
                borderRadius: 2,
                backgroundColor: "#D9D9D95E",
                color: COLORS.white,
                textTransform: "capitalize",
                letterSpacing: 0.4,
                fontSize: FONT_SIZE.medium,
                "&:hover": { backgroundColor: "#D9D9D95E" },
                marginTop: 2,
              }}
            >
              Submit
            </Button>
          </CustomCard>
        </Container>
      </Container> */
}
