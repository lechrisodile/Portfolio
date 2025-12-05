import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import { FR, GB } from 'country-flag-icons/react/3x2'

// Import des icônes pour embellir les titres
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import GroupsIcon from '@mui/icons-material/Groups';

export function SkillsSection() {
  const theme = useTheme()
  // Détection simplifiée du mode
  const isDark = theme.palette.mode === 'dark'

  const skills = {
    industrial: [
      "Siemens PLC Programming",
      "Schneider Electric PLC Programming",
      "HMI/SCADA Development",
      "Microcontrollers",
      "IoT",
      "Embedded Systems",
      "Telecommunications",
      "Industrial Networks",
      "Automation",
      "PID Control regulation",
      "MES 403 / MES4.0",
      "CIROS",
    ],
    programming: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "C++",
      "React",
      "Node.js",
      "Express",
      "Basic",
      "React Native",
      "Next.js",
    ],
    infrastructure: [
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Linux",
      "Windows Server",
      "Traefik",
      "Node-RED",
      "Prisma",
      "Radius Servers",
    ],
    professional: [
      "Adaptability",
      "Communication",
      "Teamwork",
      "Patience",
      "Problem Solving"
    ]
  }

  const skillCategories = [
    {
      title: 'Industrial Computing',
      skills: skills.industrial,
      icon: <PrecisionManufacturingIcon color="primary" />,
      color: theme.palette.primary.main
    },
    {
      title: 'Programming & Frameworks',
      skills: skills.programming,
      icon: <CodeIcon color="secondary" />,
      color: theme.palette.secondary.main
    },
    {
      title: 'Databases & Infrastructure',
      skills: skills.infrastructure,
      icon: <StorageIcon color="info" />,
      color: theme.palette.info.main
    },
    {
      title: 'Soft Skills',
      skills: skills.professional,
      icon: <GroupsIcon color="success" />,
      color: theme.palette.success.main,
      isProfessional: true
    },
  ]

  const languages = [
    { name: 'French', flag: FR, level: 'Native' },
    { name: 'English', flag: GB, level: 'Basic (A1)' },
  ]

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* En-tête de section */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              mt: 1,
              mb: 2,
              // Utilisation d'un gradient pour le texte (optionnel, moderne)
              background: isDark
                ? `linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)`
                : `linear-gradient(45deg, #1976d2 30%, #9c27b0 90%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Soft & Hard Skills
          </Typography>
        </Box>

        {/* Grille principale des compétences */}
        <Grid container spacing={4} alignItems="stretch">
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index} sx={{ display: 'flex' }}>
              <Paper
                elevation={isDark ? 2 : 1}
                sx={{
                  p: 3,
                  width: '100%',
                  borderRadius: 4,
                  // Effet de bordure subtil
                  border: `1px solid ${alpha(category.color, 0.2)}`,
                  backgroundColor: isDark ? alpha(category.color, 0.05) : '#fff',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s',

                }}
              >
                {/* Titre de la carte avec Icône */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, pb: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
                  {category.icon}
                  <Typography variant="h6" fontWeight={700}>
                    {category.title}
                  </Typography>
                </Box>

                {/* Liste des Chips */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills
                    .slice()
                    .sort((a, b) => a.localeCompare(b))
                    .map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant={category.isProfessional ? "filled" : "outlined"}
                        sx={{
                          fontWeight: 500,
                          fontSize: '0.85rem',
                          borderColor: alpha(category.color, 0.3),
                          color: isDark ? 'text.primary' : 'text.dark',
                          bgcolor: category.isProfessional
                            ? alpha(category.color, 0.1)
                            : 'transparent',
                        }}
                      />
                    ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Section Langues */}
        <Box sx={{ mt: 8, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h5" fontWeight={700} textAlign="center" sx={{ mb: 4 }}>
            Langues
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {languages.map((lang, index) => {
              const Flag = lang.flag
              return (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                      transition: '0.3s',
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 45,
                        boxShadow: 2,
                        borderRadius: 1,
                        overflow: 'hidden',
                        flexShrink: 0
                      }}
                    >
                      <Flag title={lang.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>

                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        {lang.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lang.level}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}