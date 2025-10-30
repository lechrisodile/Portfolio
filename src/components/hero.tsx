"use client"

import { Box, Container, Typography, Button, Grid } from "@mui/material"
import { useTheme } from "./theme-provider"

export function Hero() {
  const { darkMode } = useTheme()

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 12, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={12} sx={{ md: 8 }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                background: darkMode
                  ? "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)"
                  : "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Industrial IT Student
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
              Shaping the future of connected technology
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 4 }}>
              Curious and driven by a passion for innovation, I constantly seek to expand
              my knowledge and skills in the field of Industrial IT.
              I embrace each challenge as an opportunity to grow and
              explore new frontiers in IT and automation.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" size="large" href="#contact">
                Get In Touch
              </Button>
              <Button variant="outlined" size="large" href="#about">
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
