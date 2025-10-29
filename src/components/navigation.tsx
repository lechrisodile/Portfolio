"use client"
import Image from "next/image"
import { useState } from "react"
import { IconButton, Box, Typography, Link, Drawer, useMediaQuery } from "@mui/material"
import { Brightness4, Brightness7, Menu, Close } from "@mui/icons-material"
import { useTheme } from "./theme-provider"

export function Navigation() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [openMenu, setOpenMenu] = useState(false)
  const isMobile = useMediaQuery("(max-width:650px)")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setOpenMenu(false)
    }
  }

  const navLinks = [
    { label: "About Me", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

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
        backgroundColor: darkMode ? "rgba(26,26,46,0.8)" : "rgba(245,245,245,0.8)",
        borderBottomColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
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
        {/* Logo / Nom */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => scrollToSection("hero")}
        >
          <Image
            src="/logobg.png"
            alt="Logo"
            width={90}   // largeur du logo
            height={90*(408/612)}  // hauteur du logo
            priority
          />
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginLeft: 1,   // espace entre logo et texte
              color: darkMode ? "#e0e0e0" : "#2c3e50",
              "&:hover": { color: darkMode ? "#7c3aed" : "#2563eb" },
            }}
          >
             Christan Tchayep
          </Typography>
        </Box>


        {!isMobile ? (
          // Desktop
          <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                component="button"
                onClick={() => scrollToSection(link.id)}
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  textDecoration: "none",
                  color: darkMode ? "#e0e0e0" : "#2c3e50",
                  "&:hover": { color: darkMode ? "#7c3aed" : "#2563eb" },
                }}
              >
                {link.label}
              </Link>
            ))}
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        ) : (
          // Mobile
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <IconButton onClick={() => setOpenMenu(true)} color="inherit">
              <Menu />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Drawer mobile */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: {
            width: "70%",           // largeur 70% écran
            maxWidth: "300px",      // limite largeur max
            height: "auto",         // hauteur automatique selon contenu
            maxHeight: "90vh",      // jamais plus que 90% de l’écran
            borderRadius: "8px 0 0 8px", // coins arrondis gauche
            backgroundColor: darkMode ? "#1c1c2e" : "#fafafa",
            padding: "1rem",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontWeight: 600, color: darkMode ? "#e0e0e0" : "#2c3e50" }}>
            Menu
          </Typography>
          <IconButton onClick={() => setOpenMenu(false)}>
            <Close sx={{ color: darkMode ? "#e0e0e0" : "#2c3e50" }} />
          </IconButton>
        </Box>

        <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              component="button"
              onClick={() => scrollToSection(link.id)}
              sx={{
                fontSize: "1.1rem",
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
                color: darkMode ? "#e0e0e0" : "#2c3e50",
                "&:hover": { color: darkMode ? "#7c3aed" : "#2563eb" },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      </Drawer>
    </Box>
  )
}
