import React from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";

export const Toaster = ({ position, theme }) => {
  return (
    <ToastContainer
      position={position}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme={theme}
    />
  );
};
Toaster.propTypes = {
  position: PropTypes.string,
  theme: PropTypes.string,
};

Toaster.defaultProps = {
  position: "top-right",
  theme: "colored",
};
