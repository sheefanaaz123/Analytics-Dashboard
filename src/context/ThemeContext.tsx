import React, { createContext, useMemo, useState, ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Context interface
interface ThemeContextProps {
  mode: "light" | "dark";
  primaryColor: string;
  toggleTheme: () => void;
  setPrimaryColor: (color: string) => void;
}

// Create the context
export const ThemeContext = createContext<ThemeContextProps>({
  mode: "light",
  primaryColor: "#1976d2",
  toggleTheme: () => {},
  setPrimaryColor: () => {},
});

// Provider component
interface Props {
  children: ReactNode;
}

export const CustomThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [primaryColor, setPrimaryColor] = useState("#1976d2"); // default blue

  const toggleTheme = () => setMode(prev => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode,
        primary: { main: primaryColor },
      },
    }), [mode, primaryColor]);

  return (
    <ThemeContext.Provider value={{ mode, primaryColor, toggleTheme, setPrimaryColor }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
