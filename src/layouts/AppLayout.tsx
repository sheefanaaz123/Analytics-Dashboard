import React, { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import ThemeColorSelector from "../components/ThemeColorSelector";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Analytics Dashboard
          </Typography>
          <ThemeColorSelector />
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2 }}>
        <Container>{children}</Container>
      </Box>
    </>
  );
};

export default AppLayout;
