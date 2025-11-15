import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FormControlLabel, Switch } from "@mui/material";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={mode === "dark"}
          onChange={toggleTheme}
          color="primary"
        />
      }
      label={mode === "dark" ? "Dark Mode" : "Light Mode"}
    />
  );
};

export default ThemeToggle;
