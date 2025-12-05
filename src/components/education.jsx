import { Box, Container, Typography, Paper, Chip, IconButton } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import { useState } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

// --- COMPOSANT CAROUSEL ---
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = useTheme()

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'action.hover' }}>
            <SchoolIcon sx={{ fontSize: 40, opacity: 0.5 }} />
        </Box>
    )
  }

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden', 
        bgcolor: 'background.paper', // Fond neutre
      }}
    >
      <Box
        component="img"
        src={images[currentIndex]}
        alt="Education visual"
        sx={{
          width: '100%',
          height: '100%',
          // CHANGEMENT ICI : 'cover' force l'image à remplir tout le bloc (zoome dedans si nécessaire)
          objectFit: 'cover', 
          objectPosition: 'center',
          display: 'block', // Supprime les espaces fantômes inline
        }}
      />

      {/* Contrôles (seulement si > 1 image) */}
      {images.length > 1 && (
        <>
          <IconButton
            onClick={handlePrev}
            size="small"
            sx={{
              position: 'absolute',
              left: 8, top: '50%', transform: 'translateY(-50%)',
              bgcolor: 'rgba(0,0,0,0.5)', color: 'white',
              width: 32, height: 32
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            size="small"
            sx={{
              position: 'absolute',
              right: 8, top: '50%', transform: 'translateY(-50%)',
              bgcolor: 'rgba(0,0,0,0.5)', color: 'white',
              width: 32, height: 32
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </IconButton>

          {/* Points indicateurs */}
          <Box sx={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 0.8, zIndex: 2 }}>
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

// --- SECTION PRINCIPALE ---
export function Education() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const education = [
    {
      degree: "Bachelor in Industrial Computing",
      school: "Haute École Louvain en Hainaut",
      status: "Current",
      date: "2023 - 2026",
      images: ["images/helha.png"], 
      description: "Focused on electronics and automation, with a strong emphasis on networks and cybersecurity. The program bridges operational technology (OT) and information technology (IT).",
      color: "#1976d2",
      tags: ["Automation", "Network Security", "OT/IT"]
    },
    {
      degree: "First-Year Physics",
      school: "University of Yaoundé I",
      status: "Completed",
      date: "2022 - 2023",
      images: ["images/Yaounde1.png"],
      description: "Foundation year centered on core scientific disciplines such as mechanics, optics, general physics, chemistry, and applied mathematics.",
      color: "#9c27b0",
      tags: ["Mechanics", "Optics", "Applied Math"]
    }
  ]

  return (
    <Box id="education" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        
        {/* Titre */}
        <Box sx={{ mb: 8, textAlign: "center" }}>          
          <Typography variant="h2" sx={{ fontWeight: 800, mt: 1, background: isDark ? `linear-gradient(45deg, #90caf9, #ce93d8)` : `linear-gradient(45deg, #1976d2, #9c27b0)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Education
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {education.map((item, index) => {
            const isCurrent = item.status === 'Current';

            return (
              <Paper
                key={index}
                elevation={isDark ? 2 : 1}
                sx={{
                    // Supprime le padding par défaut du Paper pour que l'image touche les bords si nécessaire
                    p: 0, 
                    borderRadius: 3,
                    bgcolor: isDark ? alpha(theme.palette.background.paper, 0.6) : '#fff',
                    border: '1px solid',
                    borderColor: 'divider',
                    overflow: 'hidden', // Important pour que l'image respecte les bords arrondis
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'stretch', // Force la hauteur égale
                    transition: 'all 0.3s ease',
                }}
              >
                  {/* COLONNE GAUCHE : IMAGE (Prend toute la hauteur) */}
                  <Box
                    sx={{
                      width: { xs: '100%', sm: 250 }, // Largeur fixe agrandie
                      minWidth: { sm: 250 },
                      height: { xs: 200, sm: 'auto' }, // Hauteur auto sur desktop (suit le texte)
                      position: 'relative',
                    }}
                  >
                    <ImageCarousel images={item.images} />
                  </Box>

                  {/* COLONNE DROITE : CONTENU */}
                  <Box sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    
                    {/* Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                        <Typography variant="h6" fontWeight={800} sx={{ lineHeight: 1.2 }}>
                          {item.degree}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Chip 
                                label={item.status} 
                                size="small" 
                                color={isCurrent ? "success" : "primary"}
                                variant={isCurrent ? "filled" : "outlined"}
                                sx={{ fontWeight: 600, height: 24 }} 
                            />
                            <Chip 
                                label={item.date} 
                                size="small" 
                                variant="outlined"
                                sx={{ fontWeight: 600, height: 24 }} 
                            />
                        </Box>
                    </Box>
                    
                    {/* École */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <SchoolIcon sx={{ color: item.color, fontSize: 20 }} />
                        <Typography variant="subtitle2" sx={{ color: item.color, fontWeight: 700, fontSize: '0.95rem' }}>
                            {item.school}
                        </Typography>
                    </Box>

                    {/* Description */}
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, textAlign: 'justify' }}>
                      {item.description}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                        {item.tags.map((tag, i) => (
                            <Chip 
                                key={i} 
                                label={tag} 
                                size="small" 
                                sx={{ 
                                    fontSize: '0.7rem',
                                    bgcolor: isDark ? alpha(item.color, 0.1) : alpha(item.color, 0.05),
                                    color: isDark ? '#fff' : 'text.primary',
                                    border: '1px solid',
                                    borderColor: alpha(item.color, 0.2)
                                }} 
                            />
                        ))}
                    </Box>

                  </Box>
              </Paper>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}