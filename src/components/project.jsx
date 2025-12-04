import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import RocketIcon from '@mui/icons-material/Rocket'

export function ProjectsSection() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const projects = [
    {
      title: 'Autonomous Secure Door Access System',
      type: 'school',
      inProduction: true,
      status: 'Ongoing – 3rd Year',
      description: 'Development of an autonomous door access system combining a fingerprint module and an RFID card reader for multi-factor authentication. All access events are stored and synchronized with a backend service, while a mobile application offers real-time monitoring. The project merges embedded hardware control with a modern full-stack architecture to deliver a reliable and secure access management solution.',
      techStack: ['Next.js', 'Node.js', 'React', 'React Native', 'Microcontrollers', 'Embedded Systems'],
      githubUrl: '',
      liveUrl: '',
      images: ['images/projet22.png']
    },
    {
      title: 'Automated Warehouse System',
      type: 'school',
      inProduction: false,
      status: 'Completed – 2nd Year',
      description: 'Design and implementation of an automated warehouse system capable of scanning AprilTags on stored items using a camera mounted inside a 3D printer frame. Inventory data is displayed on a web application and an onboard display. Users can order items from a keypad or the website, and the robotic arm picks and delivers items to the output zone.',
      techStack: ['Next.js', 'Node.js', 'MySQL', 'Microcontrollers', 'Embedded Systems'],
      githubUrl: '',
      liveUrl: '',
      images: ['images/projet2.png']
    },
    {
      title: 'Guessing Game – P8055 Board',
      type: 'school',
      inProduction: false,
      status: 'Completed – 2nd Year',
      description: 'Development of an interactive guessing game using the Velleman P8055 acquisition board. The application generates a random number between 0 and 255, and the player adjusts the ATT1 potentiometer to submit a guess. At startup, all digital LEDs are lit while analog LEDs remain off. The project combines analog input processing, digital output control, and game logic implemented in VB.NET.',
      techStack: ['VB.NET', 'Visual Studio', 'P8055 Board'],
      githubUrl: '',
      liveUrl: '',
      images: ['images/interface-com.png']
    },
    {
      title: 'Electronic Dice Game',
      type: 'school',
      inProduction: false,
      status: 'Completed – 1st Year',
      description: 'Development of a dual-dice electronic system using LED matrices, driven by a Velleman PVM1001N interface board. The system simulates physical dice by generating random LED patterns. The PVM1001N handles digital I/O and communicates with a C application on a computer. The user triggers the roll, and the resulting value directly influences the game logic.',
      techStack: ['C', 'Microcontrollers', 'Digital Electronics', 'Serial Communication', 'LED Matrix Control', 'GANTT', 'PERT'],
      githubUrl: '',
      liveUrl: '',
      images: ['images/projet1.png']
    }

  ]

  const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
      <Box sx={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="img"
          src={images[currentIndex]}
          alt="Project screenshot"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
            borderRadius: 1,
          }}
        />
        {images.length > 1 && (
          <>
            <IconButton
              onClick={prevImage}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={nextImage}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <Box sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 0.5 }}>
              {images.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    )
  }
  

const TimelineItem = ({ item, isLast }) => (
    <Box sx={{ position: "relative", pl: { xs: 4, md: 6 }, pb: isLast ? 0 : 6 }}>
        <Box
            sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                borderRadius: "50%",
                backgroundColor: item.type === "education" ? "primary.main" : "secondary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                zIndex: 1,
            }}
        >
            {item.type === "education" ? <SchoolIcon /> : <WorkIcon />}
        </Box>

        {!isLast && (
            <Box
                sx={{
                    position: "absolute",
                    left: { xs: 19, md: 23 },
                    top: { xs: 48, md: 56 },
                    bottom: 0,
                    width: 2,
                    backgroundColor: "divider",
                }}
            />
        )}

        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                ml: { xs: 2, md: 3 },
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "translateX(4px)",
                    boxShadow: 2,
                },
            }}
        >
            <Typography
                variant="caption"
                sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor: "action.hover",
                    fontWeight: 600,
                    display: "inline-block",
                    mb: 1,
                }}
            >
                {item.period}
            </Typography>

            <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                {item.title}
            </Typography>

            <Typography variant="body2" color="primary" fontWeight={500} sx={{ mb: 0.5 }}>
                {item.institution}
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
                {item.location}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {item.description}
            </Typography>
        </Paper>
    </Box>
)



  return (
    <Box
      id="projects"
      sx={{
        paddingY: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? "#64b5f6" : " #1784deff",
            textAlign: 'center',
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex', width: '100%' }}>
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: 3,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'flex-start',
                  gap: 2,
                  flex: 1,
                  height: '100%',
                  minHeight: { xs: 'auto' },
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* Show image carousel if images are available */}
                {project.images && project.images.length > 0 && project.images[0] && (
                  <Box sx={{ flex: '0 0 25%', maxWidth: { xs: '100%', sm: '25%' }, mb: { xs: 2, sm: 0 }, flexShrink: 0, margin: { xs: '0 auto', sm: 0 }, display: 'flex', justifyContent: 'center' }}>
                    <ImageCarousel images={project.images} /> 
                  </Box>
                )}

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {/* Show icon based on project type */}
                      {project.type === 'professional' ? (
                        <Tooltip title="Professional Project">
                          <WorkIcon sx={{ color: isDark ? '#90caf9' : '#1976d2', fontSize: 28 }} /> 
                        </Tooltip>
                      ) : (
                        <Tooltip title="School Project">
                          <SchoolIcon sx={{ color: isDark ? '#81c784' : '#388e50ff', fontSize: 28 }} />
                        </Tooltip>
                      )}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: isDark ? '#ffffff' : '#000000',
                          fontSize: { xs: '0.9rem', sm: '1.5rem' },
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>
                    <Chip
                      label={project.status}
                      size="small"
                      sx={{
                        backgroundColor: project.status.match('Ongoing')
                          ? isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)'
                          : isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                        color: project.status.match('Ongoing')
                          ? isDark ? '#10b981' : '#059669'
                          : isDark ? '#3b82f6' : '#1e40af',
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: isDark ? '#d0d0d0' : '#333333',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    {project.description}
                    <hr/>
                  </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 2 }}>
                    {project.techStack.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          color: isDark ? '#ffffff' : '#000000',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}