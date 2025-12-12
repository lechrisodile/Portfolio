"use client"

import { useState, useEffect, useRef } from "react"
import { IconButton, Box, Typography, Button, Drawer, useMediaQuery, Container, Stack } from "@mui/material"
import { Brightness4, Brightness7, Menu, Close } from "@mui/icons-material"
import { alpha, useTheme as useMuiTheme } from "@mui/material/styles" 

// --- IMPORTANT : Importe TON hook ici ---
// Vérifie que le chemin "./theme-provider" est correct par rapport à l'endroit où est ton fichier Navigation
import { useTheme } from "./theme-provider" 

export function Navigation() {
  // 1. On récupère le toggle et le booléen depuis ton provider
  const { darkMode, toggleDarkMode } = useTheme()
  
  // 2. On récupère le thème MUI complet (pour les breakpoints et couleurs)
  const theme = useMuiTheme()
  
  const [openMenu, setOpenMenu] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [scrolled, setScrolled] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip the first render to prevent hydration mismatch
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId : string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setOpenMenu(false)
    }
  }

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  // Définition des couleurs selon le mode récupéré
  const bgColor = darkMode ? "rgba(15, 23, 42, 0.85)" : "rgba(255, 255, 255, 0.85)"
  const textColor = theme.palette.text.primary
  const primaryColor = theme.palette.primary.main

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0, left: 0, right: 0, zIndex: 1100,
        transition: "all 0.3s ease",
        backdropFilter: "blur(12px)",
        backgroundColor: scrolled ? bgColor : "transparent",
        borderBottom: "1px solid",
        borderBottomColor: scrolled 
            ? (darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)") 
            : "transparent",
        py: 1.5
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* LOGO */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer", gap: 1.5 }}
            onClick={() => scrollToSection("hero")}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.5px",
                background: darkMode 
                    ? `linear-gradient(45deg, #60a5fa 30%, #c084fc 90%)`
                    : `linear-gradient(45deg, #1784de 30%, #9c27b0 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Christan Tchayep
            </Typography>
          </Box>

          {/* DESKTOP */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    color: textColor,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    position: 'relative',
                    '&:hover': { color: primaryColor, backgroundColor: 'transparent' },
                    '&::after': {
                        content: '""', position: 'absolute', width: '0%', height: '2px',
                        bottom: 4, left: '50%', transform: 'translateX(-50%)',
                        backgroundColor: primaryColor, transition: 'width 0.3s ease'
                    },
                    '&:hover::after': { width: '80%' }
                  }}
                >
                  {link.label}
                </Button>
              ))}
              
              {/* BOUTON DARK MODE (Fonctionnel) */}
              <IconButton 
                onClick={toggleDarkMode} 
                sx={{ ml: 2, color: textColor, border: `1px solid ${alpha(textColor, 0.2)}` }}
              >
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          ) : (
            // MOBILE
            <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton onClick={toggleDarkMode} color="inherit" sx={{ color: textColor }}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <IconButton onClick={() => setOpenMenu(true)} sx={{ color: textColor }}>
                    <Menu />
                </IconButton>
            </Box>
          )}
        </Box>
      </Container>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
            sx: {
                width: "280px",
                backgroundColor: darkMode ? "rgba(15, 23, 42, 0.98)" : "rgba(255,255,255,0.98)",
                backdropFilter: "blur(10px)",
                borderLeft: "1px solid",
                borderColor: "divider",
                backgroundImage: 'none',
                p: 3
            }
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
          <Typography variant="h6" fontWeight={700} color={textColor}>
            Menu
          </Typography>
          <IconButton onClick={() => setOpenMenu(false)} sx={{ color: textColor }}>
            <Close />
          </IconButton>
        </Box>

        <Stack spacing={3}>
          {navLinks.map((link) => (
            <Button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                fontSize: "1.1rem",
                fontWeight: 600,
                color: textColor,
                textTransform: 'none',
                py: 1, px: 2, borderRadius: 2,
                '&:hover': { backgroundColor: alpha(primaryColor, 0.1), color: primaryColor }
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </Box>
  )
}