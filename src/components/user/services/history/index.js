import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { NO_SERVICE_FOUND } from "../../../assets";
import {
  SERVICE_HISTORY_CONSTANT,
  SERVICE_HISTORY_DATA,
} from "../../../constants/commonString";
import { COLORS } from "../../../themes/Colors";
import { FONT_SIZE } from "../../../themes/FontSize";
import { fontStyle } from "../../../themes/Styles";
import CustomTable from "../../../vdcomponents/CustomTable";

const ServiceHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "column", py: 2 }}
    >
      <Typography sx={{ ...fontStyle(COLORS.white, FONT_SIZE.heading1, 0.6) }}>
        Welcome, User
      </Typography>
      <Typography sx={{ ...fontStyle(COLORS.white, FONT_SIZE.heading2, 0.6) }}>
        Service History
      </Typography>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
  );
};

export default ServiceHistory;
