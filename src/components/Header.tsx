import { AppBar, Toolbar, Typography } from "@mui/material";
import ThemeColorSelector from "../components/ThemeColorSelector";
import ThemeToggle from "../components/ToggleTheme"

export const Header = () => {
    return <>
     <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      Analytics Dashboard
    </Typography>
    <ThemeToggle/>
    <ThemeColorSelector />
  </Toolbar>
</AppBar>
    </>
}