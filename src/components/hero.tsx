"use client"

import { Box, Container, Typography, Button, Grid } from "@mui/material"
import { useTheme } from "./theme-provider"

export function Hero() {
  const { darkMode } = useTheme()

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <Container maxWidth="sm">
        <Grid sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Grid size={12} sx={{ md: 8 }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                background: darkMode
                  ? "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)"
                  : "linear-gradient(135deg, #1784deff 10%, #1785ded3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Industrial 
            <br />
            <Box component="span" sx={{ }}>
              computing Student
            </Box>
            </Typography>

            <Typography variant="body1" color="text.secondary" 
            sx={{
              marginBottom: 4,
              // color: isDark ? '#b0b0b0' : '#666666',
              fontWeight: 300,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
            >
              Curious and driven by a passion for innovation, I constantly seek to expand
              my knowledge and skills in the field of Industrial IT.
              I embrace each challenge as an opportunity to grow and
              explore new frontiers in IT and automation.
            </Typography>

            <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center', 
              marginBottom: 6, 
              flexWrap: 'wrap' 
              }}
            >

              <Button variant="contained"  href="#contact"
              sx={{
                padding: { xs: '10px 24px', sm: '12px 32px' },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
              }}
              >
                Get In Touch
              </Button>
              <Button variant="outlined" 
              href="#about"
              sx={{
                padding: { xs: '10px 24px', sm: '12px 32px' },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
              }}
              >
                View Work
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
