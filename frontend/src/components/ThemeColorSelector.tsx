import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IconButton, Menu, MenuItem, Box, Typography } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";

const colors = [
  { name: "Blue", value: "#1976d2" },
  { name: "Green", value: "#2e7d32" },
  { name: "Red", value: "#d32f2f" },
  { name: "Orange", value: "#ed6c02" },
  { name: "Purple", value: "#6a1b9a" },
];

const ThemeMenu = () => {
  const { setPrimaryColor } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <PaletteIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { padding: 1, minWidth: 200 },
        }}
      >
        <Typography variant="subtitle1" sx={{ px: 1, py: 0.5 }}>
          Theme Colors
        </Typography>

        {colors.map((c) => (
          <MenuItem
            key={c.value}
            onClick={() => {
              setPrimaryColor(c.value);
              handleClose();
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                backgroundColor: c.value,
                borderRadius: "50%",
                marginRight: 1,
              }}
            />
            <Typography>{c.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ThemeMenu;
