"use client"

import { Box, Container, Typography, Button, Stack } from "@mui/material"
import { useTheme } from "@mui/material/styles" // Utilisation du hook standard MUI
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function Hero() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '90vh', // Prend presque tout l'écran
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden', // Pour couper les formes d'arrière-plan qui dépassent
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
        <Stack spacing={4} alignItems="center" textAlign="center">
          
          {/* 1. BADGE "DISPONIBLE" OU "ETUDIANT" */}
          {/* <Chip 
            icon={<CircleIcon sx={{ fontSize: '10px !important', color: '#07ec0fff' }} />}
            label="Open to Internship / Opportunities" 
            variant="outlined"
            color="success"
            sx={{ 
                borderColor: isDark ? alpha(theme.palette.divider, 0.5) : alpha(theme.palette.divider, 0.5),
                backgroundColor: isDark ? alpha('#fff', 0.05) : alpha('#00f018ff', 0.02),
                fontWeight: 600,
            }}
          /> */}

          {/* 2. TITRE PRINCIPAL */}
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, // Responsive font size
                lineHeight: 1.1,
                mb: 1
              }}
            >
              Industrial
            </Typography>
            <Typography
              variant="h1"
              component="span"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                lineHeight: 1.1,
                background: isDark
                  ? "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)"
                  : "linear-gradient(135deg, #1784de 10%, #9c27b0 100%)", // Un dégradé plus "punchy"
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Computing Student
            </Typography>
          </Box>

          {/* 3. DESCRIPTION */}
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{
              maxWidth: '600px',
              fontSize: { xs: '1rem', sm: '1.125rem' },
              lineHeight: 1.8,
            }}
          >
            Curious and driven by a passion for innovation technology,
            I embrace each challenge as an opportunity to grow.             
          </Typography>

          {/* 4. BOUTONS D'ACTION */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
            <Button 
                variant="contained" 
                size="large"
                href="#contact"
                endIcon={<SendIcon />}
                sx={{
                    px: 4, py: 1.5,
                    borderRadius: 2,
                    fontSize: '1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: isDark ? '0 4px 14px 0 rgba(96, 165, 250, 0.5)' : '0 4px 14px 0 rgba(23, 132, 222, 0.39)',
                }}
            >
              Get In Touch
            </Button>
            
            <Button 
                variant="outlined" 
                size="large"
                href="#projects" // Redirige vers les projets plutôt que About
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    px: 4, py: 1.5,
                    borderRadius: 2,
                    fontSize: '1rem',
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