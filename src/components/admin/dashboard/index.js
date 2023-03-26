import { Box, Button, Tab, Tabs, Typography,Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import {
    SERVICE_HISTORY_CONSTANT,
    SERVICE_HISTORY_DATA,
    ADMIN_TAB_NAMES,
  } from "../../constants/commonString";
  import { FONT_SIZE } from "../../themes/FontSize";
  import { COLORS } from "../../themes/Colors";
  import { fontStyle } from "../../themes/Styles";
  import DoughChart from "../../assets/doughnutChart";
  import BarChart from "../../assets/barChart";
  import CustomTable from "../../vdcomponents/CustomTable";
import Accordions from "../../vdcomponents/Accordion";
const AdminDashboard=()=>{
    const [value, setValue] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
    return(
        <>
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
        // value={value}
        // onChange={handleChange}
        aria-label="Users tabs"
        orientation="vertical"
        sx={{
          backgroundColor: COLORS.blue_shade,
          width: { md: "6%", lg: "5%" },
        //   height: "100vh",
          flexDirection: "inherit",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {ADMIN_TAB_NAMES.map((item) => {
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
        sx={{ display: "flex", flexDirection:{md:'row', sx:'column'}}}
        >
        <Grid container spacing={2} sx={{marginTop:'20px'}}>
            <Grid item xs={3}>
            {/* <Container maxWidth={false} disableGutters sx={{width:400}}> */}
            <DoughChart />
            <Typography sx={{ ...fontStyle(),textAlign:'center',fontSize:FONT_SIZE.xxl,marginTop:'10px' }}>Total Vehicles</Typography>
             {/* {/* </Container>} */}
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={5} sx={{marginTop:'30px'}} > 
            {/* <Container maxWidth={false} disableGutters sx={{width:500,}}> */}
                <BarChart />
                <Typography sx={{ ...fontStyle(),textAlign:'center',fontSize:FONT_SIZE.xxl,marginTop:'10px' }}>Vehciles Per Slot</Typography>
            </Grid>
        <Grid container  sx={{marginTop:'20px'}}>
        <Grid item xs={12}>
        <Typography sx={{ ...fontStyle(),fontSize:FONT_SIZE.xxl,marginTop:'10px',marginBottom:'10px' }}>Live Requests</Typography>
        <CustomTable
            columns={SERVICE_HISTORY_CONSTANT}
            rows={SERVICE_HISTORY_DATA}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          </Grid>
        </Grid>
        <Grid container  sx={{marginTop:'20px'}}>
        <Grid item xs={12}>
        <Typography sx={{ ...fontStyle(),fontSize:FONT_SIZE.xxl,marginTop:'10px',marginBottom:'10px' }}>History</Typography>
        <CustomTable
            columns={SERVICE_HISTORY_CONSTANT}
            rows={SERVICE_HISTORY_DATA}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Accordions />
          </Grid>
        </Grid>
        </Grid>
        </Container>
    </Container>
        </>
    )
}

export default AdminDashboard;