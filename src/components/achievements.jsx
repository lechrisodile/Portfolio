import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function AchievementsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'


  return (
    <Box
      sx={{
        paddingY: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
            textAlign: 'center',
          }}
        >
          Achievements & notable experiences
        </Typography>

        <Grid container spacing={3} sx={{ justifyContent: 'center', maxWidth: 1200, alignItems: 'stretch' }}>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Paper
              elevation={0}
              sx={{
                padding: 2,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: '0.95rem',
                  }}
                >
                  WorldSkills Industry 4.0 Finalist
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontWeight: 600,
                  }}
                >
                  2025
                </Typography>
              </Box>
              {/* Small description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.5,
                  marginBottom: 2,
                }}
              >
                I participated in the three-day national final during StarTech Day 2025.
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src="images/worldskills.png"
                alt="WorldSkills Industry 4.0 Championship"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#cfcfcf' : '#222222',
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                After the preselection phase consisting of a Siemens automate programmation to pilot a pneumatic system, I qualified for the national finale at the startech 2025. 
                During this 3-day competition, I had to complete various tasks related to Industry 4.0, such as PLC programming, HMI development, industrial networking, and system integration.
                This experience allowed me to deepen my knowledge of industrial automation and to develop problem-solving skills in a competitive environment.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <Paper
              elevation={0}
              sx={{
                padding: 2,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: { xs: '100%', sm: 360 },
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? '#ffffff' : '#000000',
                    fontSize: '0.95rem',
                  }}
                >
                  Hackathon AI for GOOD
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? '#b0b0b0' : '#666666',
                    fontWeight: 600,
                  }}
                >
                  2025
                </Typography>
              </Box>
              {/* Small description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#d0d0d0' : '#333333',
                  lineHeight: 1.5,
                  marginBottom: 2,
                }}
              >
                Developing an AI-driven study assistant designed to help students master their coursework using teacher-provided materials.
              </Typography>
              {/* Image banner */}
              <Box
                component="img"
                src="images/hackathon.png"
                alt="Hackathon AI for GOOD"
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  marginBottom: 2,
                }}
              />
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: isDark ? '#cfcfcf' : '#222222',
                  lineHeight: 1.6,
                  textAlign: 'justify',
                }}
              >
                My team and I developed an AI study assistant designed to help students master their coursework using teacher-provided materials. 
                The application utilizes natural language processing to generate summaries, quizzes, and flashcards from textbooks and lecture notes. 
                This project not only enhanced my skills in AI and machine learning but also highlighted the potential of technology to improve education accessibility and effectiveness.
              </Typography>
            </Paper>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  )
}
