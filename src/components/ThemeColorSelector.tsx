import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const colors = [
  { name: "Blue", value: "#1976d2" },
  { name: "Green", value: "#2e7d32" },
  { name: "Red", value: "#d32f2f" },
  { name: "Orange", value: "#ed6c02" },
  { name: "Purple", value: "#6a1b9a" },
];

const ThemeColorSelector = () => {
  const { primaryColor, setPrimaryColor } = useContext(ThemeContext);

  return (
    <FormControl size="small">
      <InputLabel>Primary Color</InputLabel>
      <Select
        value={primaryColor}
        onChange={(e) => setPrimaryColor(e.target.value)}
        label="Primary Color"
      >
        {colors.map(c => (
          <MenuItem key={c.value} value={c.value}>{c.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ThemeColorSelector;
