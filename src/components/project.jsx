import { Box, Container, Typography, Paper, IconButton, Chip } from '@mui/material'
import { useState } from 'react'
import SchoolIcon from '@mui/icons-material/School'
const projects = [
  {
    title: 'Autonomous Secure Door Access System',
    type: 'school',
    inProduction: true, // Sera VERT
    status: 'Ongoing – 3rd Year',
    description: 'Development of an autonomous door access system combining a fingerprint module and an RFID card reader for multi-factor authentication. All access events are stored and synchronized with a backend service, while a mobile application offers real-time monitoring. The project merges embedded hardware control with a modern full-stack architecture to deliver a reliable and secure access management solution.',
    techStack: ['Next.js', 'Node.js', 'React', 'React Native', 'Microcontrollers', 'Embedded Systems'],
    images: ['images/projet22.png']
  },
  {
    title: 'Automated Warehouse System',
    type: 'school',
    inProduction: false, // Sera BLEU
    status: 'Completed – 2nd Year',
    description: 'Design and implementation of an automated warehouse system capable of scanning AprilTags on stored items using a camera mounted inside a 3D printer frame. Inventory data is displayed on a web application and an onboard display. Users can order items from a keypad or the website, and the robotic arm picks and delivers items to the output zone.',
    techStack: ['Next.js', 'Node.js', 'MySQL', 'Microcontrollers', 'Embedded Systems'],
    images: ['images/projet2.png']
  },
  {
    title: 'Guessing Game – P8055 Board',
    type: 'school',
    inProduction: false,
    status: 'Completed – 2nd Year',
    description: 'Development of an interactive guessing game using the Velleman P8055 acquisition board. The application generates a random number between 0 and 255, and the player adjusts the ATT1 potentiometer to submit a guess. At startup, all digital LEDs are lit while analog LEDs remain off. The project combines analog input processing, digital output control, and game logic implemented in VB.NET.',
    techStack: ['VB.NET', 'Visual Studio', 'P8055 Board'],
    images: ['images/interface-com.png']
  },
  {
    title: 'Electronic Dice Game',
    type: 'school',
    inProduction: false,
    status: 'Completed – 1st Year',
    description: 'Development of a dual-dice electronic system using LED matrices, driven by a Velleman PVM1001N interface board. The system simulates physical dice by generating random LED patterns. The PVM1001N handles digital I/O and communicates with a C application on a computer. The user triggers the roll, and the resulting value directly influences the game logic.',
    techStack: ['C', 'Microcontrollers', 'Digital Electronics', 'Serial Communication', 'LED Matrix Control', 'GANTT', 'PERT'],
    images: ['images/projet1.png']
  }
]

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Ajustement de la hauteur pour correspondre à la nouvelle mise en page
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: 200, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'null', borderRadius: 1 }}>
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
        }}
      />
      
    </Box>
  )
}

const TimelineItem = ({ item, isLast }) => (
  <Box sx={{ position: "relative", pl: { xs: 4, md: 6 }, pb: isLast ? 0 : 6 }}>
    {/* Ligne verticale de la timeline */}
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

    {/* Icône Rond sur la gauche */}
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
      }}
    >
      <SchoolIcon />
    </Box>

    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        ml: { xs: 2, md: 3 },
        transition: "transform 0.2s, box-shadow 0.2s",
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column sur mobile, Row sur desktop
        gap: 3
      }}
    >
      {/* GAUCHE : Image (35% de largeur sur desktop) */}
      <Box sx={{ 
        width: { xs: '100%', md: '35%' }, 
        flexShrink: 0,
        minHeight: 200 // Hauteur minimum pour l'image
      }}>
        <ImageCarousel images={item.images} />
      </Box>

      {/* DROITE : Description et Status */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* En-tête : Titre + Status */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1, gap: 2 }}>
          <Typography variant="h6" fontWeight={600}>
            {item.title}
          </Typography>

          {/* STATUS : Vert si en cours, Bleu sinon */}
          <Chip 
            label={item.status} 
            color={item.inProduction ? "success" : "primary"} // success = vert, primary = bleu (par défaut MUI)
            size="small"
            sx={{ fontWeight: 600, flexShrink: 0 }}
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
          {item.description}
        </Typography>

        {/* Tech Stack (Optionnel: affichage des technologies en bas) */}
        <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {item.techStack.map((tech, i) => (
             <Chip key={i} label={tech} size="small" variant="outlined" sx={{ fontSize: '0.7rem', }} color="primary" />
          ))}
        </Box>
      </Box>
    </Paper>
  </Box>
)

export function ProjectsSection() {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">      
        <Box>
          <Typography variant="h2" fontWeight={600} sx={{ mb: 4, color:"#1784deff", fontWeight:800 }}>
            Projet
          </Typography>
          {projects.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === projects.length - 1} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}