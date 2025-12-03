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
      title: 'Automated warehouse system',
      type: 'school', // professional or school
      inProduction: false,
      description: 'In my second year at HELHa Charleroi, I was tasked with building an automated warehouse system. A camera would scan AprilTags on items inside the frame of a 3D printer, and the stock is displayed on a web application and a small display directly on the frame. Users can order items from a keypad on the frame or the website, and the arm of the frame picks and places the items into a delivery zone.',
      techStack: ['Next JS', 'Node.js', 'MySQL', 'Microcontrollers', 'SSE', "Embedded systems"],
      githubUrl: '',
      liveUrl: '',
      images: ['images/projet2.png']
    },
    {
      title: 'Dice game with K8055 card',
      type: 'school', // professional or school
      inProduction: false,
      description: 'In my first year at HELHa Charleroi, I was tasked with building an automated warehouse system. A camera would scan AprilTags on items inside the frame of a 3D printer, and the stock is displayed on a web application and a small display directly on the frame. Users can order items from a keypad on the frame or the website, and the arm of the frame picks and places the items into a delivery zone.',
      techStack: ['C', 'Microcontrollers',],
      githubUrl: '',
      liveUrl: '',
      images: ['images/projet2.png']
    },
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

  return (
    <Box
      id="projects"
      sx={{
        paddingY: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? '#ffffff' : '#000000',
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
                          <SchoolIcon sx={{ color: isDark ? '#81c784' : '#388e3c', fontSize: 28 }} />
                        </Tooltip>
                      )}
                      {/* Show production icon if inProduction is true */}
                      {project.inProduction && (
                        <Tooltip title="In Production">
                          <RocketIcon sx={{ color: isDark ? '#ffb74d' : '#f57c00', fontSize: 20 }} />
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
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {project.liveUrl ? (
                        <IconButton
                          component="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live site`}
                          sx={{
                            backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            color: isDark ? '#ffffff' : '#000000',
                            '&:hover': { backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' },
                          }}
                        >
                          <LanguageIcon />
                        </IconButton>
                      ) : (
                        <IconButton disabled aria-label="live site not available" sx={{ opacity: 0.4 }}>
                          <LanguageIcon />
                        </IconButton>
                      )}

                      {project.githubUrl ? (
                        <IconButton
                          component="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          sx={{
                            backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            color: isDark ? '#ffffff' : '#000000',
                            '&:hover': { backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' },
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      ) : (
                        <IconButton disabled aria-label="GitHub not available" sx={{ opacity: 0.4 }}>
                          <GitHubIcon />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
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
                  <Typography
                    variant="body1"
                    sx={{
                      color: isDark ? '#d0d0d0' : '#333333',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}