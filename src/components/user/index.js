import { Tab, Tabs } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { TAB_NAMES } from "../constants/commonString";
import { COLORS } from "../themes/Colors";
import Profile from "./Profile";
import ServiceHistory from "./services/history";
import NewServiceRequest from "./services/newRequest";
import LogoutIcon from "@mui/icons-material/Logout";

const UserDashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        background: COLORS.LINEAR_GRAD,
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
          display: { xs: "none", md: "flex" },
        }}
      >
        {TAB_NAMES.map((item) => {
          return (
            <Tab
              to={`/${item.link}`}
              key={item.id}
              icon={<item.icon sx={{ fontSize: 36, color: COLORS.white }} />}
              aria-label={item.name}
            />
          );
        })}
      </Tabs>
      {value === 0 && <ServiceHistory />}
      {value === 1 && <Profile />}
      {value === 2 && <NewServiceRequest />}
    </Container>
  );
};

export default UserDashboard;
