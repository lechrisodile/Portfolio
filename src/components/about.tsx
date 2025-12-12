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
import { EmojiObjects, Sports, SportsSoccer } from '@mui/icons-material';

export function About() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  // Données structurées pour les cartes de parcours
  const journeySteps = [
    {
      title: "Goal",
      icon: <EmojiObjects />,
      color: "#f57c00", // Orange
      text: "My goal is to work for a company specializing in one of the fields of industrial IT, so that I can play an active role in technological progress and contribute to the development of society.",
      tags: ["Industrial IT", "Innovation", "Impact"],
    },
     {
      title: "Knowledge",
      icon: <SchoolIcon />,
      color: "#0288d1", // Bleu
      text: "I have developed strong knowledge in programming languages, mobile development, and automation, as well as in embedded systems and IoT solutions.",
      tags: ["Programming", "Automation", "IoT"]
    },
    {
      title: "Hobbies & Interests",
      icon: <SportsSoccer/>,
      color: "#7b1fa2", // Violet
      text: "I am passionate about music, especially the piano, which offers me a real moment of relaxation and escape. I also enjoy soccer, another way for me to entertain myself and recharge my batteries.",
      tags: ["Piano", "Soccer", "Music"]
    },
   
  ]

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">

        {/* TITRE DE SECTION */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
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
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
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
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
              Hi, I'm Christan Tchayep
            </Typography>

            {/* Paragraphe 1 : Identité & Parcours (Cameroun -> Belgique) */}
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, textAlign: 'justify' }}>
              I am 22 years old and currently a third-year student in industrial computer science at HELHa in Charleroi. 
              Born in Cameroon, I completed my primary and secondary education there, graduating with my high school diploma in 2022.
               I then began my first year of physics at the University of Yaoundé I, which I successfully completed.
            </Typography>

            {/* Paragraphe 2 : Motivation & Arrivée en Belgique */}
             <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, textAlign: 'justify' }}>
              Passionate about computer science and eager to deepen my knowledge in this field, I applied for a student visa to pursue my studies in industrial computer science abroad.
              After obtaining this visa, I moved to Belgium, where I have been living since 2023.
            </Typography>

            {/* Paragraphe 3 : Soft Skills & Jobs Étudiants (TRES IMPORTANT POUR LE PORTFOLIO) */}
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, textAlign: 'justify' }}>
              Throughout my entire academic journey, my parents have always encouraged and supported me.
              Their constant motivation played an essential role in my determination to pursue higher education and to give my best in everything I undertake.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, textAlign: 'justify' }}>
              During my first two years at HELHa, I managed to successfully pass all my courses thanks to consistent work, strong motivation, and good time management. 
              In parallel with my studies, I also take on student jobs to finance my education and cover my living expenses. These work experiences have helped me develop a sense of responsibility, autonomy, and perseverance, while allowing me to pursue my academic goals under good conditions.
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
            <Grid size={{ xs: 12, md: 4 }} key={index}>
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

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {step.text}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                  {step.tags
                    .slice()
                    .sort((a, b) => a.localeCompare(b))
                    .map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: alpha(step.color, 0.15),
                          color: step.color,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>


      </Container>
    </Box>
  )
}