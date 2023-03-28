import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { fontStyle } from "../../../themes/Styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { COLORS } from "../../../themes/Colors";
import CustomSelect from "../../../vdcomponents/CustomSelect";
import {
  NEW_REQ_TAB_NAMES,
  SERVICE_SELECTED,
  TIME_SLOTS,
  VEHICLE_TYPE,
  VENDORS_LIST,
} from "../../../constants/commonString";
import { FONT_SIZE } from "../../../themes/FontSize";
import CustomInput from "../../../vdcomponents/CustomInput";
import CustomCard from "../../../vdcomponents/CustomCard";
import RemoveIcon from "@mui/icons-material/Remove";

const NewServiceRequest = () => {
  const [isVehicleDetailsVisible, setIsVehicleDetailsVisible] = useState(false);
  const [isLocationDetailVisible, setIsLocationDetailVisible] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);
  const [vehicleType, setVehicleType] = useState("ALL");
  const [value, setValue] = useState(0);
  const [serviceReqPage, setServiceReqPage] = useState(1);

  const serviceReqStyle = {
    fontSize: FONT_SIZE.extraLarge,
    color: COLORS.white,
    letterSpacing: 0.4,
  };

  const SelectLabelStyle = {
    fontSize: FONT_SIZE.extraLarge,
    color: COLORS.white,
    letterSpacing: 0.3,
  };

  const customSelectStyle = {
    color: COLORS.white,
    paddingTop: 2,
    fontSize: FONT_SIZE.large,
  };

  const containerStyle = {
    backgroundColor: COLORS.white_shade_37,
    width: "100%",
    height: 40,
    borderRadius: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: 2,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        style={{ marginTop: 10, marginBottom: 10 }}
        {...other}
      >
        {value === index && (
          <CustomCard
            maxWidth={false}
            style={{ padding: 20, alignItems: "flex-start" }}
          >
            {children}
          </CustomCard>
        )}
      </div>
    );
  }

  const VehicleServiceRequest = () => {
    return (
      <>
        <Grid container sx={{ py: 2 }} spacing={1}>
          <Grid
            item
            md={4}
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            //   sx={{ mx: 2 }}
          >
            <Container
              onClick={() =>
                setIsVehicleDetailsVisible(!isVehicleDetailsVisible)
              }
              maxWidth={false}
              disableGutters
              sx={containerStyle}
            >
              <Typography sx={serviceReqStyle}>1. Vehicle</Typography>
              {isVehicleDetailsVisible ? (
                <ExpandLessIcon sx={{ fontSize: 34, color: COLORS.white }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 34, color: COLORS.white }} />
              )}
            </Container>
            {isVehicleDetailsVisible && (
              <>
                <CustomSelect
                  formStyle={{ minWidth: "100%", marginTop: 3 }}
                  labelStyle={SelectLabelStyle}
                  sx={customSelectStyle}
                  menuItems={VEHICLE_TYPE}
                  label={"Type"}
                  inputLabelText={"Type"}
                  value={vehicleType}
                  handleChange={(e) => setVehicleType(e.target.value)}
                />
                <CustomSelect
                  formStyle={{ minWidth: "100%", marginTop: 3 }}
                  labelStyle={SelectLabelStyle}
                  sx={customSelectStyle}
                  menuItems={VEHICLE_TYPE}
                  label={"Brand"}
                  inputLabelText={"Brand"}
                  value={vehicleType}
                  handleChange={(e) => setVehicleType(e.target.value)}
                />
                <CustomSelect
                  formStyle={{ minWidth: "100%", marginTop: 3 }}
                  labelStyle={SelectLabelStyle}
                  sx={customSelectStyle}
                  menuItems={VEHICLE_TYPE}
                  label={"Modal"}
                  inputLabelText={"Modal"}
                  value={vehicleType}
                  handleChange={(e) => setVehicleType(e.target.value)}
                />
                <CustomInput
                  margin="normal"
                  required
                  fullWidth
                  label="Reg No."
                  name="Reg No."
                  variant="standard"
                  // value={profileInfo.fName}
                  // onChange={(event) => handleFirstNameChange(event)}
                />
              </>
            )}
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            //   sx={{ mx: 2 }}
          >
            <Container
              onClick={() =>
                setIsLocationDetailVisible(!isLocationDetailVisible)
              }
              maxWidth={false}
              disableGutters
              sx={containerStyle}
            >
              <Typography sx={serviceReqStyle}>2. Location</Typography>
              {isLocationDetailVisible ? (
                <ExpandLessIcon sx={{ fontSize: 34, color: COLORS.white }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 34, color: COLORS.white }} />
              )}
            </Container>
            {isLocationDetailVisible && (
              <>
                <Typography
                  sx={{
                    fontSize: 18,
                    color: COLORS.white,
                    justifyContent: "center",
                    display: "flex",
                    py: 1,
                  }}
                >
                  Current Location Detected: Hubli
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    color: COLORS.dark_blue,
                    justifyContent: "center",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  Change
                </Typography>
                <CustomSelect
                  formStyle={{ minWidth: "100%", marginTop: 2 }}
                  labelStyle={SelectLabelStyle}
                  sx={customSelectStyle}
                  menuItems={VEHICLE_TYPE}
                  label={"Select Location"}
                  inputLabelText={"Select Location"}
                  value={vehicleType}
                  handleChange={(e) => setVehicleType(e.target.value)}
                />
              </>
            )}
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            //   sx={{ mx: 2 }}
          >
            <Container
              onClick={() => setIsServiceVisible(!isServiceVisible)}
              maxWidth={false}
              disableGutters
              sx={containerStyle}
            >
              <Typography sx={serviceReqStyle}>3. Services</Typography>
              {isServiceVisible ? (
                <ExpandLessIcon sx={{ fontSize: 34, color: COLORS.white }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 34, color: COLORS.white }} />
              )}
            </Container>
            {isServiceVisible && (
              <CustomSelect
                formStyle={{ minWidth: "100%", marginTop: 2 }}
                labelStyle={SelectLabelStyle}
                sx={customSelectStyle}
                menuItems={VEHICLE_TYPE}
                label={"Select Service"}
                inputLabelText={"Select Service"}
                value={vehicleType}
                handleChange={(e) => setVehicleType(e.target.value)}
              />
            )}
          </Grid>
        </Grid>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            position: "absolute",
            bottom: 50,
            left: 0,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: FONT_SIZE.large, color: COLORS.white }}>
            Estimated Cost: 1800
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: 200,
              height: 45,
              backgroundColor: "#D9D9D95E",
              color: COLORS.white,
              my: 2,
            }}
            onClick={() => setServiceReqPage(2)}
          >
            Next
          </Button>
        </Container>
      </>
    );
  };

  const VendorAndSlotBooking = () => {
    return (
      <>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="service-request-label"
            variant="fullWidth"
            textColor={"inherit"}
            indicatorColor={"secondary"}
            sx={{ backgroundColor: COLORS.white_shade_11, borderRadius: 2 }}
          >
            {NEW_REQ_TAB_NAMES.map((item, index) => {
              return (
                <Tab
                  key={item.id}
                  icon={<item.icon />}
                  label={item.name}
                  iconPosition="end"
                  sx={{ color: COLORS.white }}
                />
              );
            })}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {VENDORS_LIST.map((item, index) => {
            return (
              <Container
                maxWidth={false}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  p: 2,
                  borderBottom: "2px solid #72C6EF",
                }}
              >
                <Box
                  component={"img"}
                  src={item.image}
                  sx={{ borderRadius: 2 }}
                />
                <Container
                  maxWidth={false}
                  sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: FONT_SIZE.xxl,
                      color: COLORS.white,
                      letterSpacing: 0.3,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: FONT_SIZE.large,
                      color: COLORS.gray,
                      letterSpacing: 0.3,
                    }}
                  >{`${item.address}, ${item.city}, ${item.pincode}`}</Typography>
                  <Typography
                    sx={{
                      fontSize: FONT_SIZE.large,
                      color: COLORS.gray,
                      letterSpacing: 0.3,
                    }}
                  >{`Rating ${item.rating}`}</Typography>
                  <Typography
                    sx={{
                      fontSize: FONT_SIZE.large,
                      color: COLORS.gray,
                      letterSpacing: 0.3,
                    }}
                  >{`Approximate distance: ${item.distance}`}</Typography>
                </Container>
              </Container>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: FONT_SIZE.extraLarge,
                py: 2,
                color: COLORS.white,
                letterSpacing: 0.4,
              }}
            >
              Select Any Date Based on Your Interest
            </Typography>
            <CustomInput
              required
              // label="Date"
              name="Date"
              type="date"
              InputLabelProps={{
                required: true,
                sx: {
                  color: COLORS.white,
                  textTransform: "capitalize",
                },
              }}
              sx={{
                width: "25%",
                color: COLORS.white,
                border: `1px solid ${COLORS.white}`,
                "& .MuiInputLabel-root.Mui-focused": {
                  color: COLORS.white,
                },
              }}
              InputProps={{ style: { color: "white" } }}
              // value={roomRequestFormDetails.checkIn}
              // onChange={(e) => {
              //   const value = e.target.value;
              //   setRoomRequestFormDetails({
              //     ...roomRequestFormDetails,
              //     checkIn: value,
              //   });
              // }}
            />
            <Typography
              sx={{
                fontSize: FONT_SIZE.extraLarge,
                py: 2,
                color: COLORS.white,
              }}
            >
              Select Time Slot
            </Typography>
            <Container
              maxWidth={false}
              disableGutters
              sx={{ display: "flex", flexDirection: "row" }}
            >
              {TIME_SLOTS.map((item) => {
                return (
                  <FormGroup>
                    <FormControlLabel
                      key={item.id}
                      control={
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 28,
                              color: COLORS.white,
                            },
                          }}
                        />
                      }
                      label={item.time}
                      sx={{ color: COLORS.white }}
                    />
                  </FormGroup>
                );
              })}
            </Container>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2}>
          {SERVICE_SELECTED.map((item, index) => {
            return (
              <Container maxWidth={false}>
                <Typography
                  sx={{
                    ...fontStyle(COLORS.white, FONT_SIZE.extraLarge, 0.4),
                    lineHeight: 2,
                  }}
                >{`Reg No: ${item.regNo}`}</Typography>
                <Typography
                  sx={{
                    ...fontStyle(COLORS.white, FONT_SIZE.extraLarge, 0.4),
                    lineHeight: 2,
                  }}
                >{`Vehicle: ${item.vehicle}`}</Typography>
                <Typography
                  sx={{
                    ...fontStyle(COLORS.white, FONT_SIZE.xxl, 0.4),
                    lineHeight: 2,
                  }}
                >
                  {"Services"}
                </Typography>
                <Container
                  maxWidth={false}
                  disableGutters
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  {item.services.map((service) => {
                    return (
                      <Paper
                        key={service.id}
                        sx={{
                          backgroundColor: COLORS.blue,
                          marginRight: 2,
                          p: 1,
                          borderRadius: 2,
                          minWidth: "20%",
                          boxShadow: `3px 5px ${COLORS.blue_shade}`,
                        }}
                      >
                        <Typography
                          sx={{
                            ...fontStyle(
                              COLORS.white,
                              FONT_SIZE.extraLarge,
                              0.4
                            ),
                            lineHeight: 2,
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {service.name}
                          <RemoveIcon sx={{ fontSize: 35 }} />
                        </Typography>
                        <Typography
                          sx={{
                            ...fontStyle(COLORS.white, FONT_SIZE.small, 0.4),
                            lineHeight: 2,
                          }}
                        >
                          {service.desc}
                        </Typography>
                      </Paper>
                    );
                  })}
                </Container>
                <Typography
                  sx={{
                    ...fontStyle(COLORS.white, FONT_SIZE.extraLarge, 0.4),
                    lineHeight: 2,
                    paddingTop: 1,
                  }}
                >{`Service Center: ${item.serviceCenter}`}</Typography>
                <Typography
                  sx={{
                    ...fontStyle(COLORS.white, FONT_SIZE.extraLarge, 0.4),
                    lineHeight: 2,
                  }}
                >{`Timing: ${item.timing}`}</Typography>
                <Typography
                  sx={{
                    ...fontStyle(COLORS.white, FONT_SIZE.extraLarge, 0.4),
                    lineHeight: 2,
                  }}
                >{`Place: ${item.place}`}</Typography>
                <Container
                  maxWidth={false}
                  disableGutters
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <Container
                    maxWidth={false}
                    disableGutters
                    sx={{ maxWidth: "50%" }}
                  >
                    <Typography
                      sx={{
                        ...fontStyle(COLORS.white, FONT_SIZE.xxl, 0.4),
                        lineHeight: 2,
                      }}
                    >
                      {"Estimated Cost:"}
                    </Typography>
                    {item.estimatedCost.map((data) => {
                      return (
                        <Typography
                          sx={{
                            ...fontStyle(
                              COLORS.white,
                              FONT_SIZE.extraLarge,
                              0.4
                            ),
                            lineHeight: 1.5,
                          }}
                        >{`${data.serviceName}- ${data.cost}`}</Typography>
                      );
                    })}
                    <Typography
                      sx={{
                        ...fontStyle(COLORS.white, FONT_SIZE.xxl, 0.4),
                        lineHeight: 2,
                      }}
                    >
                      {"Total Price: 1419"}
                    </Typography>
                  </Container>
                  <Typography
                    sx={{ fontSize: FONT_SIZE.small, color: COLORS.gray }}
                  >
                    {
                      "**Cost will be calculated based selected vehicle or enginee cc and other parameters as wel and might vary based selected service center**"
                    }
                  </Typography>
                </Container>
              </Container>
            );
          })}
          <Container
            maxWidth={false}
            disableGutters
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="outlined"
              sx={{
                width: 240,
                height: 54,
                borderRadius: 2,
                color: COLORS.white,
                backgroundColor: COLORS.white_shade_37,
              }}
            >
              Proceed to Payment
            </Button>
          </Container>
        </TabPanel>
      </>
    );
  };
  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Typography sx={{ ...fontStyle(), py: 1 }}>
        New Service Request
      </Typography>
      <Typography sx={{ ...fontStyle(COLORS.white, FONT_SIZE.medium, 0.2) }}>
        Please let us know when you are planning to bring your vehicle for
        service
      </Typography>
      {serviceReqPage === 1 && <VehicleServiceRequest />}
      {serviceReqPage === 2 && <VendorAndSlotBooking />}
    </Container>
  );
};

export default NewServiceRequest;
