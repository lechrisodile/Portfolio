"use client"

import React, { useState, createContext, useContext } from "react"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
// 1. IMPORT DU CACHE PROVIDER (Essentiel pour Next.js App Router)
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
        main: darkMode ? "#60a5fa" : "#1784de", 
        contrastText: "#ffffff",
      },
      secondary: {
        main: darkMode ? "#c084fc" : "#9c27b0",
      },
      background: {
        default: darkMode ? "#0f172a" : "#ffffff", 
        paper: darkMode ? "#1e293b" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#f1f5f9" : "#1e293b",
        secondary: darkMode ? "#94a3b8" : "#64748b",
      },
      divider: darkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      button: { fontWeight: 600, textTransform: "none" },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
          },
        },
      },
    },
  })

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    // 2. ENVELOPPER TOUT LE CONTENU ICI
    <AppRouterCacheProvider>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </AppRouterCacheProvider>
  )
}