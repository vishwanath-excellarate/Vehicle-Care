import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { COLORS } from "../../themes/Colors";
import { FONT_SIZE } from "../../themes/FontSize";

const CustomSelect = ({
  menuItems,
  inputLabelText,
  value,
  label,
  handleChange,
  formStyle,
  labelStyle,
  ...rest
}) => {
  return (
    <FormControl variant="standard" sx={formStyle}>
      <InputLabel id="select-helper-label" sx={labelStyle}>
        {inputLabelText}
      </InputLabel>
      <Select
        {...rest}
        labelId="select-helper-label"
        id="select-helper"
        value={value}
        label={label}
        onChange={handleChange}
        sx={{
          borderBottom: `1px solid ${COLORS.white}`,
          color: COLORS.white,
          py: 1,
          fontSize: FONT_SIZE.large,
          "& .MuiSelect-root.Mui-focused": {
            color: COLORS.white,
          },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
  menuItems: PropTypes.array,
  inputLabelText: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  formStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

CustomSelect.defaultProps = {
  menuItems: [],
  inputLabelText: "",
  value: "",
  label: "",
  handleChange: "",
  formStyle: {},
  labelStyle: {},
};
