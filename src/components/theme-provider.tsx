"use client"

import type React from "react"
import { useState, createContext, useContext } from "react"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#64b5f6" : "#1976d2",
      },
      secondary: {
        main: darkMode ? "#4dd0e1" : "#0097a7",
      },
      background: {
        default: darkMode ? "#1a1a2e" : "#ffffff",
        paper: darkMode ? "#252538" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#e0e0e0" : "#2c3e50",
        secondary: darkMode ? "#b0b0b0" : "#546e7a",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: "2.5rem",
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.75rem",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.4,
      },
      body1: {
        fontSize: "1.125rem",
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 12,
    },
    
  })

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
