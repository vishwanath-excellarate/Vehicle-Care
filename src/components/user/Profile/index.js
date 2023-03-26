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
    fName: "",
    lName: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
    addressProf: "",
  });

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
    <Container
      maxWidth={false}
      disableGutters
      style={{
        background: "linear-gradient(90deg, #72C6EF 0%, #004E8F 100%)",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Users tabs"
        orientation="vertical"
        sx={{
          backgroundColor: COLORS.blue_shade,
          width: { md: "6%", lg: "5%" },
          height: "100vh",
          flexDirection: "inherit",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {TAB_NAMES.map((item) => {
          return (
            <Tab
              key={item.id}
              icon={<item.icon sx={{ fontSize: 34, color: COLORS.white }} />}
              aria-label={item.name}
            />
          );
        })}
      </Tabs>
      <Container
        maxWidth={false}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography sx={{ ...fontStyle() }}>Welcome, User</Typography>
        <Typography sx={{ ...fontStyle(), lineHeight: 1 }}>
          Service History
        </Typography>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CustomTable
            columns={SERVICE_HISTORY_CONSTANT}
            rows={SERVICE_HISTORY_DATA}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Container>
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
