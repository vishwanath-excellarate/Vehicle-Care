import { Container } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";

const CustomCard = ({ disableGutters, maxWidth, children, ...rest }) => {
  return (
    <Container
      {...rest}
      disableGutters={disableGutters}
      maxWidth={maxWidth}
      sx={{
        backgroundColor: "#E0E4F042",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        border: "1px solid #CABBBB",
        borderRadius: 2,
        flexDirection:'column'
      }}
    >
      {children}
    </Container>
  );
};

export default CustomCard;

CustomCard.propTypes = {
  disableGutters: PropTypes.bool,
  maxWidth: PropTypes.string,
};

CustomCard.defaultProps = {
  disableGutters: true,
  maxWidth: "md",
};
