"use client"

import { Box, Container, Typography, Paper, Chip, IconButton } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import { useState } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

// Définition de l'interface pour un projet
interface Project {
    title: string
    type: string
    inProduction: boolean
    status: string
    description: string
    techStack: string[]
    images: string[]
}

const projects: Project[] = [
     {
    title: 'Secure IoT Door Access System',
    type: 'school',
    inProduction: true,
    status: 'Ongoing – 3rd Year',
    description: `For my final year project, I am developing a secure access control system based on a specific architectural schema provided by the school. The system grants access via fingerprint for managers and RFID badges for employees.

    I have already completed the embedded systems programming, successfully controlling the communication between sensors, actuators, and the LoRa Shield. I am currently focused on the physical construction phase, wiring the control box and assembling the power interfaces. The data flux is designed to transmit access logs from the LoRa Gateway to a web server and database.
    
    My next step is to develop the mobile application that will query this server to supervise the system. This project challenges me to bridge the gap between abstract schematics and a physical, working IoT prototype.`,
    techStack: ['LoRa/LoRaWAN', 'MQTT', 'React Native', 'Node.js', 'SQL', 'C++ (Embedded)', 'Biometrics'],
    images: ['images/pro3.png'] // Ajoutez une image de votre appli mobile ou du schéma système ici
  },
    {
        title: 'Automated Warehouse System',
        type: 'school',
        inProduction: false,
        status: 'Completed – 2nd Year',
        description: `For this second-year project, my team and I designed an automated warehouse system. My tasks focused on the system architecture and the embedded programming, including motor control and communication with the Raspberry Pi. One of the main challenges was ensuring that the mobile camera could reliably scan items and that the electromagnet could collect them reliably after scanning. I also contributed to the electronic safety checks by performing power calculations and verifying component limits.
        
        This project taught me the importance of considering real-world hardware constraints—such as lighting, mechanical latency, and electrical safety—when developing industrial software. It also confirmed the value of teamwork when everyone combines their strengths and supports one another.`,
        techStack: ['Express.js', 'Node.js', 'MySQL', 'Microcontrollers', 'Embedded Systems'],
        images: ['images/projet2.png', 'images/projet21.png', 'images/projet3.png']
    },
    {
        title: 'Industrial Temperature Regulation',
        type: 'school',
        inProduction: false,
        status: 'Completed – 2nd Year',
        description: `For this automation project, the goal was to design a complete temperature control loop using Siemens industrial equipment. I was personally responsible for programming the PLC logic and designing the HMI visualization interface.

         My mission was to implement a Compact PID controller to regulate a heating LED and configure PWM signals to control the cooling fans. To overcome the firmware incompatibilities that hindered communication between the S7-1200 and S7-1500 controllers, the professor allowed us to centralize supervision on a single controller, the S7-1200.

        The final system featured a responsive HMI with real-time trends, alarm management and secure administrator access. This project was a decisive experience in mastering the environment of the TIA portal and adapting to material constraints in an industrial context.`,
        techStack: ['Siemens S7-1200', 'TIA Portal', 'HMI KTP600', 'PID Control', 'PWM', 'QElectroTech'],
        images: ['images/automate.png', 'images/automate1.png', 'images/automate2.png', 'images/automate3.png'] // Ajoutez vos images ici (ex: captures du rapport)
    },
    {
        title: 'Guessing Game – PC Interface & P8055 Board',
        type: 'school',
        inProduction: false,
        status: 'Completed – 2nd Year',
        description: `This project was another opportunity to deepen my knowledge of interfacing a PC application with external hardware. I chose to develop this interactive game in VB.NET, as requested by the professor.

        The core logic involved reading the analog signal from a potentiometer to simulate the user's response. At first, I had trouble understanding how each part of the Velleman 2003 P8055-1 interface board worked. After conducting some research and studying the test program, I finally understood the board's structure and completed my task.

        Although the game itself is simple, this project highlighted the importance of understanding other people's code and reinforced the need to write clear, well-commented programs. It also gave me practical experience in reading hardware inputs and controlling outputs, which are essential skills when working with embedded systems.`,
        techStack: ['VB.NET', 'Visual Studio', 'P8055 Board'],
        images: ['images/interface-com.png', 'images/projet22.png']
    },
    {
        title: 'Dice System – PC Interface & Velleman Board PVM1001N',
        type: 'school',
        inProduction: false,
        status: 'Completed – 1st Year',
        description:
            `As part of my first year, I carried out a project to create two electronic dice displaying their values simultaneously on a PC and on two LED matrices driven by a Velleman PVM1001N board.

            My mission was to implement random number generation, display patterns, and serial communication between the PC and the board in C. I tested each component individually, identified the failing elements, corrected wiring errors, and adjusted the communication logic to ensure perfect synchronization between the modules.
    
            The system ultimately functioned correctly, displaying the matching value on the PC and the LED matrix. This project allowed me to acquire essential skills in digital electronics, low-level C programming, and hardware diagnostics, as well as a first concrete experience in software-hardware interfacing, reinforcing my overall understanding of embedded systems.`,
        techStack: ['C', 'Microcontrollers', 'Digital Electronics', 'Serial Communication', 'LED Matrix Control', 'GANTT', 'PERT'],
        images: ['images/projet1.png', 'images/projet11.png']
    }
]

// Props pour le carrousel
interface ImageCarouselProps {
    images: string[]
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

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
                minHeight: 250,
                overflow: 'hidden',
                borderRadius: 2, // Arrondi un peu plus doux pour s'intégrer au texte
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
            }}
        >
            <Box
                component="img"
                src={images[currentIndex]}
                alt="Project screenshot"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                }}
            />

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
                            bgcolor: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
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
                            bgcolor: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                            boxShadow: 2
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: 0.5,
                            bgcolor: 'rgba(0,0,0,0.5)',
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
                                    bgcolor: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
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

// Props pour la timeline
interface TimelineItemProps {
    item: Project
    isLast: boolean
}

const TimelineItem = ({ item, isLast }: TimelineItemProps) => {
    const statusColor = item.inProduction ? "success" : "primary";

    return (
        <Box sx={{ position: "relative", pl: { xs: 4, md: 6 }, pb: isLast ? 0 : 6 }}>
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
                    // Suppression de display: flex pour permettre le float
                    display: 'block',
                    overflow: 'hidden'
                }}
            >

                {/* Header (Titre + Statut) */}
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

                {/* CAROUSEL FLOTTANT À DROITE 
            On utilise float: right + margin-left pour que le texte coule autour
        */}
                <Box sx={{
                    float: { md: 'right', xs: 'none' }, // Flotte à droite sur desktop, normal sur mobile
                    width: { xs: '100%', md: '40%' },
                    maxWidth: { md: '350px' },
                    ml: { md: 3, xs: 0 }, // Marge à gauche pour séparer du texte
                    mb: { xs: 3, md: 1 }, // Marge en bas pour le mobile
                    clear: 'right' // Sécurité
                }}>
                    <ImageCarousel images={item.images} />
                </Box>

                {/* Description (Texte qui va "wrapper" l'image) */}
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3, textAlign: 'justify', whiteSpace: 'pre-line' }}>
                    {item.description}
                </Typography>

                {/* Tags Techniques (en bas, après que tout soit fini) */}
                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1, clear: 'both' }}>
                    {item.techStack
                        .slice()
                        .sort((a, b) => a.localeCompare(b))
                        .map((tech, i) => (
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

            </Paper>
        </Box>
    )
}

export function ProjectsSection() {
    const { palette } = useTheme();
    const isDark = palette.mode === 'dark';

    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 6, md: 10 },
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
                        Academic Projects
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