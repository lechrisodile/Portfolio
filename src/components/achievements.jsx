"use client"

import { Box, Container, Typography, Grid, Chip, IconButton } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import { useState } from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CodeIcon from '@mui/icons-material/Code'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const achievements = [
  {
    title: "National Competitor - Industry 4.0",
    subtitle: "StarTech Day 2025 (WorldSkills Belgium)",
    year: "2025",
    description: "Selected to compete in the national finals at StarTech Day 2025 after a successful pre-selection phase. During this intensive 3-day competition, I programmed Siemens PLCs, developed HMI interfaces, and managed industrial networks under strict time constraints. This experience was a true test of my technical skills and my ability to perform under pressure, reinforcing my passion for industrial automation.",
    images: ["images/worldskills.png"], 
    icon: <EmojiEventsIcon />,
    color: "#2d9bfbff", // Bleu cyan
    tags: ["Siemens PLC", "HMI", "Pneumatics", "Industrial Network", "CIROS", "MES4"]
  },
  {
    title: "Hackathon AI for GOOD",
    subtitle: "AI Study Assistant Project",
    year: "2025",
    description: "Participated in a hackathon focused on ethical AI, where my team and I developed an AI-driven study assistant. My role involved integrating Large Language Models (LLM) to transform educational content into interactive quizzes. This project not only honed my coding skills in Python and React but also taught me the value of agile collaboration and rapid prototyping to deliver a functional MVP in a limited timeframe.",
    images: ["images/mic.png", "images/mic1.png", "images/mic3.png"],
    icon: <CodeIcon />,
    color: "#ab47bc", // Violet
    tags: ["AI / LLM", "React", "Python", "Agile", "Teamwork"]
  }
]

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) return null

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden',
        bgcolor: 'background.paper'
      }}
    >
      <Box
        component="img"
        src={images[currentIndex]}
        alt="Achievement visual"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
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
              left: 8, top: '50%', transform: 'translateY(-50%)',
              bgcolor: 'rgba(0,0,0,0.5)', color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              width: 36, height: 36
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            size="small"
            sx={{
              position: 'absolute',
              right: 8, top: '50%', transform: 'translateY(-50%)',
              bgcolor: 'rgba(0,0,0,0.5)', color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              width: 36, height: 36
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
          </IconButton>

          <Box sx={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 1, zIndex: 2 }}>
            {images.map((_, idx) => (
                <Box 
                    key={idx}
                    sx={{
                        width: 8, height: 8, borderRadius: '50%',
                        bgcolor: idx === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
                        transition: '0.3s'
                    }}
                />
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}

export function Achievements() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="achievements"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "background.default",
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: "center" }}>
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
            Notable Experiences
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 0 } }}>
          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <Grid 
                container 
                key={index} 
                spacing={{ xs: 4, md: 8 }} 
                alignItems="center"
                direction={isEven ? 'row' : 'row-reverse'}
                sx={{ mb: { xs: 0, md: 8 } }}
              >
                
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 250, md: 350 },
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.5)' : '0 8px 32px rgba(0,0,0,0.1)',
                      transition: 'transform 0.4s ease',
                      bgcolor: 'background.paper',
                    }}
                  >
                    <ImageCarousel images={item.images} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: isEven ? 'flex-start' : 'flex-end' }, textAlign: { xs: 'left', md: isEven ? 'left' : 'right' } }}>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexDirection: { xs: 'row', md: isEven ? 'row' : 'row-reverse' } }}>
                       <Box 
                            sx={{ 
                                p: 1.5, 
                                borderRadius: '12px', 
                                bgcolor: alpha(item.color, 0.1), 
                                color: item.color,
                                display: 'flex'
                            }}
                        >
                            {item.icon}
                        </Box>
                        <Chip label={item.year} size="small" variant="outlined" sx={{ fontWeight: 600 }} />
                    </Box>

                    <Typography variant="h4" fontWeight={800} sx={{ mb: 1, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                      {item.title}
                    </Typography>
                    
                    <Typography variant="h6" color={item.color} fontWeight={600} sx={{ mb: 3 }}>
                      {item.subtitle}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                      {item.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'flex-start', md: isEven ? 'flex-start' : 'flex-end' } }}>
                        {item.tags.map((tag, i) => (
                            <Chip 
                                key={i} 
                                label={tag} 
                                size="small" 
                                sx={{ 
                                    bgcolor: isDark ? alpha(item.color, 0.1) : alpha(item.color, 0.05),
                                    color: isDark ? '#fff' : 'text.primary',
                                    border: '1px solid',
                                    borderColor: alpha(item.color, 0.2)
                                }} 
                            />
                        ))}
                    </Box>

                  </Box>
                </Grid>
              </Grid>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}