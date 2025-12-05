"use client"
import { Box, Container, Typography, Grid, Paper, Chip, Avatar, Stack } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'

// Icons
import TerminalIcon from '@mui/icons-material/Terminal';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';

export function About() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  // Données structurées pour les cartes de parcours
  const journeySteps = [
    {
      title: "The Self-Taught Creator",
      period: "Early Origins",
      icon: <MovieCreationIcon />,
      color: "#f57c00", // Orange
      text: "Before my academic journey, I taught myself video editing and worked as a freelancer. This experience forged my core soft skills: patience, entrepreneurship, and effective communication.",
      skills: ["Self-learning", "Creativity", "Patience"]
    },
    {
      title: "The Software Architect",
      period: "1st Bachelor (HELHa Mons)",
      icon: <TerminalIcon />,
      color: "#0288d1", // Bleu
      text: "My first degree sparked a passion for clean code and architecture. I learned that code is written for humans first, and that good architecture is the best defense against technical debt.",
      skills: ["Clean Code", "Architecture", "Web Dev"]
    },
    {
      title: "The Industrial Engineer",
      period: "2nd Bachelor (HELHa Charleroi)",
      icon: <PrecisionManufacturingIcon />,
      color: "#7b1fa2", // Violet
      text: "Pursuing a second degree in Industrial Computing allowed me to bridge the gap between software and hardware, giving me a complete understanding of our connected world.",
      skills: ["Embedded Systems", "Hardware", "IoT"]
    }
  ]

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        // backgroundColor: "background.default" // Optionnel selon ton layout global
      }}
    >
      <Container maxWidth="lg">
        
        {/* TITRE DE SECTION */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
            }}
          >
            Who I Am
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mt: 1,
              background: isDark 
                ? `linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)`
                : `linear-gradient(45deg, #1976d2 30%, #9c27b0 90%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>
        </Box>

        {/* 1. INTRO & PROFIL */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          {/* Photo / Avatar à Gauche */}
          <Grid size={{xs:12, md:4}} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: 280,
                height: 280,
                borderRadius: '50%',
                bgcolor: isDark ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.primary.main, 0.05),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                boxShadow: isDark ? '0 0 40px rgba(100, 181, 246, 0.2)' : '0 0 40px rgba(23, 132, 222, 0.1)',
              }}
            >
                {/* Remplace src="" par ta photo : src="images/profile.jpg" */}
               <Avatar 
                src="images/mePortrait.png" 
                alt="Christan Tchayep"
                sx={{ width: 250, height: 250 }}
               />
            </Box>
          </Grid>

          {/* Texte Intro à Droite */}
          <Grid size={{xs:12, md:8}}>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
              Hi, I'm Christan Tchayep
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3, textAlign: 'justify' }}>
              I’m a 22-year-old industrial computing student born in Cameroon and living in Belgium since 2023. 
              My journey is defined by a constant drive to understand how things work—from the pixels on a screen to the electrons in a microcontroller.
            </Typography>

            {/* Chips Stats */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Chip icon={<LocationOnIcon />} label="Belgium" variant="outlined" sx={{ fontWeight: 500 }} />
              <Chip icon={<CakeIcon />} label="22 Years Old" variant="outlined" sx={{ fontWeight: 500 }} />
              <Chip icon={<SchoolIcon />} label="Industrial Computing Student" variant="outlined" sx={{ fontWeight: 500 }} />
            </Stack>
          </Grid>
        </Grid>

        {/* 2. LE PARCOURS (3 CARDS) */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {journeySteps.map((step, index) => (
            <Grid size={{xs:12, md:4}}  key={index}>
              <Paper
                elevation={isDark ? 2 : 0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  bgcolor: isDark ? alpha(theme.palette.background.paper, 0.6) : '#fff',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: alpha(step.color, 0.5),
                    boxShadow: theme.shadows[4]
                  }
                }}
              >
                <Box sx={{ 
                    width: 50, height: 50, 
                    borderRadius: 3, 
                    bgcolor: alpha(step.color, 0.1), 
                    color: step.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 3
                }}>
                  {step.icon}
                </Box>
                
                <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                  {step.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2, fontWeight: 600 }}>
                  {step.period}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {step.text}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                  {step.skills.map((skill) => (
                    <Chip 
                        key={skill} 
                        label={skill} 
                        size="small" 
                        sx={{ 
                            fontSize: '0.7rem', 
                            bgcolor: alpha(step.color, 0.05),
                            color: isDark ? '#fff' : 'text.primary',
                            border: `1px solid ${alpha(step.color, 0.2)}`
                        }} 
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* 3. LE BUT (GOAL) */}
        <Paper
            elevation={0}
            sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                bgcolor: isDark ? alpha(theme.palette.primary.main, 0.05) : alpha(theme.palette.primary.main, 0.02),
                border: `1px dashed ${alpha(theme.palette.primary.main, 0.3)}`,
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto'
            }}
        >
            <RocketLaunchIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" fontWeight={700} gutterBottom>
                What's Next?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                "These studies and experiences have given me a strong foundation to tackle tomorrow’s world and its challenges. 
                My new goal is to gain what I’m missing: <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>real years of experience inside a tech company.</Box>"
            </Typography>
        </Paper>

      </Container>
    </Box>
  )
}