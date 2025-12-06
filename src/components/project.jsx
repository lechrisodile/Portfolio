import { Box, Container, Typography, Paper, Chip, IconButton } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import { useState } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const projects = [
  // {
  //   title: 'Autonomous Secure Door Access System',
  //   type: 'school',
  //   inProduction: true,
  //   status: 'Ongoing – 3rd Year',
  //   description: 'Development of an autonomous door access system combining a fingerprint module and an RFID card reader for multi-factor authentication. All access events are stored and synchronized with a backend service, while a mobile application offers real-time monitoring. The project merges embedded hardware control with a modern full-stack architecture to deliver a reliable and secure access management solution.',
  //   techStack: ['Next.js', 'Node.js', 'React', 'React Native', 'Microcontrollers', 'Embedded Systems'],
  //   images: ['images/pc.png', 'images/projet2.png'] // Ajout d'une image test pour voir le carrousel
  // },
  {
    title: 'Automated Warehouse System',
    type: 'school',
    inProduction: false,
    status: 'Completed – 2nd Year',
    description: 'Design and implementation of an automated warehouse system capable of scanning AprilTags on stored items using a camera mounted inside a 3D printer frame. Inventory data is displayed on a web application and an onboard display. Users can order items from a keypad or the website, and the robotic arm picks and delivers items to the output zone.',
    techStack: ['Next.js', 'Node.js', 'MySQL', 'Microcontrollers', 'Embedded Systems'],
    images: ['images/projet21.png','images/projet2.png']
  },
  {
    title: 'Guessing Game – P8055 Board',
    type: 'school',
    inProduction: false,
    status: 'Completed – 2nd Year',
    description: 'Development of an interactive guessing game using the Velleman P8055 acquisition board. The application generates a random number between 0 and 255, and the player adjusts the ATT1 potentiometer to submit a guess. At startup, all digital LEDs are lit while analog LEDs remain off. The project combines analog input processing, digital output control, and game logic implemented in VB.NET.',
    techStack: ['VB.NET', 'Visual Studio', 'P8055 Board'],
    images: ['images/interface-com.png', 'images/projet22.png']
  },
  {
    title: 'Electronic Dice Game',
    type: 'school',
    inProduction: false,
    status: 'Completed – 1st Year',
    description: 'Development of a dual-dice electronic system using LED matrices, driven by a Velleman PVM1001N interface board. The system simulates physical dice by generating random LED patterns. The PVM1001N handles digital I/O and communicates with a C application on a computer. The user triggers the roll, and the resulting value directly influences the game logic.',
    techStack: ['C', 'Microcontrollers', 'Digital Electronics', 'Serial Communication', 'LED Matrix Control', 'GANTT', 'PERT'],
    images: ['images/projet1.png', 'images/projet11.png']
  }
]

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = useTheme()

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        minHeight: 250, // Hauteur minimale forcée
        overflow: 'hidden', 
        borderRadius: 0.5,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default', 
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={images[currentIndex]}
        alt="Project screenshot"
        sx={{
          width: '100%',
          height: '100%',
          // 'cover' remplit tout le cadre (peut couper les bords).
          // Remplacez par 'contain' si vous voulez voir toute l'image (mais avec des bandes vides).
          objectFit: 'cover', 
          objectPosition: 'center',
          display: 'block',
        }}
      />

      {/* Contrôles (Flèches) - Seulement si plus d'une image */}
      {images.length > 1 && (
        <>
          <IconButton
            onClick={handlePrev}
            size="small"
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: alpha(theme.palette.background.paper, 0.7),
              '&:hover': { bgcolor: theme.palette.background.paper },
              boxShadow: 2
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            size="small"
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: alpha(theme.palette.background.paper, 0.7),
              '&:hover': { bgcolor: theme.palette.background.paper },
              boxShadow: 2
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>

          {/* Indicateurs (Points) en bas */}
          <Box 
            sx={{
                position: 'absolute',
                bottom: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 0.5,
                bgcolor: alpha('#000', 0.3),
                padding: '4px 8px',
                borderRadius: 10
            }}
          >
            {images.map((_, idx) => (
                <Box 
                    key={idx}
                    sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: idx === currentIndex ? '#fff' : alpha('#fff', 0.5),
                        transition: 'all 0.3s'
                    }}
                />
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}

const TimelineItem = ({ item, isLast }) => {
  const statusColor = item.inProduction ? "success" : "primary";

  return (
    <Box sx={{ position: "relative", pl: { xs: 4, md: 6 }, pb: isLast ? 0 : 6 }}>
      {/* Ligne verticale */}
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

      {/* Icône Rond */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          borderRadius: "50%",
          backgroundColor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          zIndex: 1,
          boxShadow: 2
        }}
      >
        <SchoolIcon />
      </Box>

      <Paper
        elevation={1}
        sx={{
          p: 3,
          border: "1px solid",
          borderColor: "divider",
          ml: { xs: 2, md: 3 },
          transition: "transform 0.2s, box-shadow 0.2s",
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 3,
          overflow: 'hidden' // Important pour que l'image ne dépasse pas au radius
        }}
      >
        {/* GAUCHE : Carrousel (Largeur fixe sur desktop) */}
        <Box sx={{ 
          width: { xs: '100%', md: '40%' }, // Augmenté un peu à 40% pour mieux voir
          flexShrink: 0,
          minHeight: 250, // Hauteur forcée pour alignement
          display: 'flex'
        }}>
          <ImageCarousel images={item.images} />
        </Box>

        {/* DROITE : Description */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, gap: 2 }}>
            <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.2 }}>
              {item.title}
            </Typography>

            <Chip 
              label={item.status} 
              color={statusColor} 
              variant={item.inProduction ? "filled" : "outlined"} 
              size="small"
              sx={{ fontWeight: 600, flexShrink: 0 }}
            />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3, textAlign: 'justify' }}>
            {item.description}
          </Typography>

          <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {item.techStack.map((tech, i) => (
              <Chip 
                key={i} 
                label={tech} 
                size="small" 
                variant="outlined" 
                sx={{ 
                  fontSize: '0.75rem', 
                  borderRadius: 1,
                  backgroundColor: alpha('#000', 0.03)
                }} 
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export function ProjectsSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">      
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
                fontWeight: 800, 
                mt: 1,
                background: isDark 
                    ? `linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)`
                    : `linear-gradient(45deg, #1784de 30%, #9c27b0 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
          >
            Projets Académiques
          </Typography>
        </Box>
        
        <Box>
          {projects.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === projects.length - 1} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}