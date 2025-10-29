"use client"

import { IconButton, Box, Typography, Link } from "@mui/material"
import { Brightness4, Brightness7 } from "@mui/icons-material"
import { useTheme } from "./theme-provider"

export function Navigation() {
  const { darkMode, toggleDarkMode } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1rem 2rem",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        transition: "all 0.3s ease",
        backgroundColor: darkMode ? "rgba(26, 26, 46, 0.8)" : "rgba(245, 245, 245, 0.8)",
        borderBottomColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            cursor: "pointer",
            transition: "color 0.3s ease",
            color: darkMode ? "#e0e0e0" : "#2c3e50",
            "&:hover": {
              color: darkMode ? "#7c3aed" : "#2563eb",
            },
          }}
          onClick={() => scrollToSection("hero")}
        >
          Votre Nom
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Link
            component="button"
            onClick={() => scrollToSection("about")}
            sx={{
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "color 0.3s ease",
              textDecoration: "none",
              color: darkMode ? "#e0e0e0" : "#2c3e50",
              "&:hover": {
                color: darkMode ? "#7c3aed" : "#2563eb",
              },
            }}
          >
            À propos
          </Link>
          <Link
            component="button"
            onClick={() => scrollToSection("skills")}
            sx={{
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "color 0.3s ease",
              textDecoration: "none",
              color: darkMode ? "#e0e0e0" : "#2c3e50",
              "&:hover": {
                color: darkMode ? "#7c3aed" : "#2563eb",
              },
            }}
          >
            Compétences
          </Link>
          <Link
            component="button"
            onClick={() => scrollToSection("contact")}
            sx={{
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "color 0.3s ease",
              textDecoration: "none",
              color: darkMode ? "#e0e0e0" : "#2c3e50",
              "&:hover": {
                color: darkMode ? "#7c3aed" : "#2563eb",
              },
            }}
          >
            Contact
          </Link>

          <Box sx={{ marginLeft: "1rem" }}>
            <IconButton onClick={toggleDarkMode} color="inherit" size="medium">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
