import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FR, RO, GB, NL } from 'country-flag-icons/react/3x2'

export function SkillsSection() {
  const theme = useTheme()
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
      "Java",,
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
    // management: [
    //   "Git",
    //   "Gantt"
    // ],
    professional: [
      "Adaptability",
      "Communication",
      "Teamwork",
      "Patience",
    ]
  }

  const skillCategories = [
    { title: 'Industrial Computing', skills: skills.industrial },
    { title: 'Programming & Frameworks', skills: skills.programming },
    { title: 'Databases & Infrastructure', skills: skills.infrastructure },
    // { title: 'Project Management', skills: skills.management },
    { title: 'Soft Skills', skills: skills.professional, isProfessional: true },
  ]

  const languages = [
    { name: 'French', flag: FR, level: 'Native', value: 100 },
    { name: 'English', flag: GB, level: 'Basic (A1)', value: 25 },
  ]

  return (
    <Box
      id="skills"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="md" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ?"#64b5f6": " #1784deff",
            textAlign: 'center',
          }}
        >
          Soft and Hard Skills
        </Typography>

        <Grid container spacing={4} sx={{ marginBottom: 8, alignItems: 'stretch', justifyContent: 'center' }}>
          {skillCategories.map((category, index) => (
            <Grid key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', height: '100%', padding: { xs: 1, sm: 2 } }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 2,
                    color: isDark ? '#ffffff' : '#000000',
                    textAlign: 'center',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  }}
                >
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, sm: 1.5 }, justifyContent: 'center' }}>
                  {category.skills
                    .slice() // don't mutate original
                    .sort((a : any, b : any) => a.toLowerCase().localeCompare(b.toLowerCase()))
                    .map((skill) => (
                      <Paper
                        key={skill}
                        sx={{
                          padding: { xs: '6px 10px', sm: '8px 12px' },
                          backgroundColor: category.isProfessional
                            ? isDark ? '#ffffff' : '#10154b29'
                            : isDark ? 'rgba(169, 33, 33, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                          color: category.isProfessional
                            ? isDark ? '#000000' : '#0e0e0eff'
                            : isDark ? '#ffffff' : '#090d10ff',
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(34, 90, 243, 0.51)'}`,
                          borderRadius: '10px',
                          fontWeight: 500,
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                          {skill}
                        </Typography>
                      </Paper>
                    ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ maxWidth: '800px', margin: '0 auto', marginTop: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginBottom: 3,
              color: isDark ? '#ffffff' : '#000000',
              textAlign: 'center',
            }}
          >
            Languages
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 3, alignItems: 'stretch' }}>
            {languages.map((lang, index) => {
              const Flag = lang.flag
              return (
                <Box key={index} sx={{ display: 'flex' }}>
                  <Paper
                    elevation={0}
                    sx={{
                      padding: 3,
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: 120,
                      minWidth: 180,
                      width: 350,
                      '&:hover': {
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginBottom: 2,
                        flex: 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ width: 32, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Flag title={lang.name} style={{ width: '100%', height: '100%', borderRadius: 2 }} />
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: isDark ? '#d0d0d0' : '#333333',
                            fontWeight: 600,
                          }}
                        >
                          {lang.name}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: isDark ? '#808080' : '#353837f6',
                        }}
                      >
                        {lang.level} 
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
