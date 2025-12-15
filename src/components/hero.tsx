"use client"

import { Box, Container, Typography, Button, Stack, Avatar, Chip } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';

export function Hero() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 6 },
        pb: { xs: 4, md: 6 },
      }}
    >
      {/* --- BACKGROUND DECORATIF (Blobs de couleur) --- */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: isDark
            ? 'radial-gradient(circle, rgba(25, 118, 210, 0.15) 0%, rgba(0,0,0,0) 70%)'
            : 'radial-gradient(circle, rgba(23, 132, 222, 0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={2.5} alignItems="center" textAlign="center">

          {/* 1. PROFILE PICTURE AT THE TOP */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: 140, sm: 170, md: 200 },
              height: { xs: 140, sm: 170, md: 200 },
              borderRadius: '50%',
              bgcolor: isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(23, 132, 222, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `2px solid`,
              borderColor: isDark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(23, 132, 222, 0.2)',
              boxShadow: isDark ? '0 0 40px rgba(96, 165, 250, 0.2)' : '0 0 40px rgba(23, 132, 222, 0.1)',
            }}
          >
            <Avatar
              src="images/mePortrait.png"
              alt="Christan Tchayep"
              sx={{ width: { xs: 120, sm: 150, md: 180 }, height: { xs: 120, sm: 150, md: 180 } }}
            />
          </Box>

          {/* 2. BADGE "DISPONIBLE" OU "ETUDIANT" */}
          <Chip
            icon={<CircleIcon sx={{ fontSize: '10px !important', color: '#07ec0fff' }} />}
            label="Open to Internship / Opportunities"
            variant="outlined"
            color="success"
            sx={{
              borderColor: isDark ? alpha(theme.palette.divider, 0.5) : alpha(theme.palette.divider, 0.5),
              backgroundColor: isDark ? alpha('#fff', 0.05) : alpha('#00f018ff', 0.02),
              fontWeight: 600,
            }}
          />

          {/* 3. TITRE PRINCIPAL */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: 1.1,
                mb: 0.5
              }}
            >
              Industrial
            </Typography>
            <Typography
              variant="h2"
              component="span"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: 1.1,
                background: isDark
                  ? "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)"
                  : "linear-gradient(135deg, #1784de 10%, #9c27b0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Computing Student
            </Typography>
          </Box>

          {/* 4. DESCRIPTION */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxWidth: '550px',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              lineHeight: 1.6,
            }}
          >
            Hi, I am Christan, a 22-year-old industrial computing engineer passionate about innovation.
            I bridge embedded hardware with modern software to create intelligent systems.
          </Typography>

          {/* 5. BOUTONS D'ACTION */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
            <Button
              variant="contained"
              size="medium"
              href="#contact"
              endIcon={<SendIcon />}
              sx={{
                px: 3, py: 1,
                borderRadius: 2,
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'none',
                boxShadow: isDark ? '0 4px 14px 0 rgba(96, 165, 250, 0.5)' : '0 4px 14px 0 rgba(23, 132, 222, 0.39)',
              }}
            >
              Get In Touch
            </Button>

            <Button
              variant="outlined"
              size="medium"
              href="#projects" // Redirige vers les projets plutôt que About
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                px: 3, py: 1,
                borderRadius: 2,
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'none',
                borderColor: theme.palette.divider,
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'text.primary',
                  backgroundColor: 'transparent'
                }
              }}
            >
              View Work
            </Button>
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}