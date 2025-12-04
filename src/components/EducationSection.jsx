import { Box, Container, Typography, Paper, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function EducationSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const education = [
    {
      "degree": "Bachelor in Industrial Computing (Systems and Networks)",
      "school": "Haute École Louvain en Hainaut",
      "status": "Current",
      "date": "2023 - 2026",
      "photo": "images/helha.png",
      "description": "Focused on electronics and automation, with a strong emphasis on networks and cybersecurity. The program bridges operational technology (OT) and information technology (IT), preparing me to work at the intersection of both worlds."
    },
    {
      "degree": "First-Year Physics",
      "school": "University of Yaoundé I",
      "status": "Winter 2023",
      "date": "2022 - 2023",
      "photo": "images/Yaounde1.png",
      "description": "Introduction to foundational physics with exposure to electronics and basic automation concepts. The curriculum strengthens analytical skills and prepares for further studies in scientific and technological fields."
    },


  ]

  return (
    <Box
      id="education"
      sx={{
        paddingY: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? "#64b5f6" : " #1784deff",
            textAlign: 'center',
          }}
        >
          Education
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '840px', margin: '0 auto' }}>
          {education.map((edu, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                padding: 3,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  alignItems: 'stretch',
                  justifyContent: 'center',
                }}
              >
                {/* Photo Card */}
                <Paper
                  elevation={0}
                  sx={{
                    width: { xs: '100%', sm: '160px' },
                    height: { xs: '200px', sm: '160px' },
                    minWidth: { xs: 'auto', sm: '160px' },
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {edu.photo && (
                    <Box
                      component="img"
                      src={edu.photo}
                      alt={edu.degree}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Paper>

                {/* Education Info */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: { xs: 'auto', sm: '160px' } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 1, flexWrap: 'wrap', gap: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: isDark ? '#ffffff' : '#000000',
                      }}
                    >
                      {edu.degree}
                    </Typography>
                    <Chip
                      label={edu.status}
                      size="small"
                      sx={{
                        backgroundColor: edu.status === 'Current'
                          ? isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)'
                          : isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                        color: edu.status === 'Current'
                          ? isDark ? '#10b981' : '#059669'
                          : isDark ? '#3b82f6' : '#1e40af',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#b0b0b0' : '#666666',
                      marginBottom: 0.5,
                    }}
                  >
                    {edu.school}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#808080' : '#999999',
                      fontSize: '0.85rem',
                    }}
                  >
                    {edu.date}
                  </Typography>
                  {edu.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? '#d0d0d0' : '#333333',
                        marginTop: 1,
                        lineHeight: 1.6,
                      }}
                    >
                      {edu.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}