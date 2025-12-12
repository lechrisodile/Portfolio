"use client"

import { Box, Container, Typography, Paper } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { SvgIconComponent } from '@mui/icons-material'

// Définition de l'interface pour structurer les données
interface ContactItem {
  icon: SvgIconComponent
  label: string
  value: string
  href?: string
}

export function Contact() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const contactItems: ContactItem[] = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'juniortchayep@outlook.com',
      href: 'mailto:juniortchayep@outlook.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+32 488 93 38 09',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'Christan Tchayep',
      href: 'https://www.linkedin.com/in/christan-tchayep-4240a5340/'
    },
    {
      icon: LocationOnIcon,
      label: 'Location',
      value: 'Charleroi, Belgium',
    }
  ]

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 }, // Espacement vertical cohérent avec les autres sections
      }}
    >
      <Container maxWidth="md">

        {/* --- EN-TÊTE --- */}
        <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
            }}
          >
            Get In Touch
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              marginBottom: 2,
              marginTop: 1,
              // Même dégradé que About et Skills
              background: isDark 
                ? `linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)` 
                : `linear-gradient(45deg, #1784de 30%, #9c27b0 90%)`, 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
           Let&apos;s collaborate together
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Listening to new opportunities and collaborations. Do not hesitate to contact me to discuss industrial and technological IT projects.
          </Typography>
        </Box>

        {/* --- GRILLE 2x2 --- */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',                   
            sm: '1fr',                   
            md: 'repeat(2, minmax(0, 1fr))', 
          },
          gap: 3,
          alignItems: 'stretch',
          marginBottom: 4,
        }}>
          {contactItems.map((item, index) => {
            const IconComponent = item.icon
            const isLink = !!item.href

            return (
              <Paper
                key={index}
                elevation={0}
                component={isLink ? 'a' : 'div'}
                href={isLink ? item.href : undefined}
                target={isLink && item.href?.startsWith('http') ? '_blank' : undefined}
                rel={isLink && item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  padding: 3,
                  backgroundColor: isDark ? alpha(theme.palette.primary.main, 0.05) : alpha(theme.palette.primary.main, 0.02),
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                  
                  textDecoration: 'none',
                  cursor: isLink ? 'pointer' : 'default',
                  
                  '&:hover': isLink ? {
                    backgroundColor: isDark ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.primary.main, 0.05),
                    transform: 'translateY(-2px)',
                    borderColor: theme.palette.primary.main, 
                  } : {},
                }}
              >
                {/* Boîte de l'icône */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    backgroundColor: isDark ? alpha(theme.palette.background.paper, 0.5) : '#fff',
                    borderRadius: '50%',
                    flexShrink: 0,
                    boxShadow: 1
                  }}
                >
                  <IconComponent
                    sx={{
                      color: 'primary.main',
                      fontSize: '1.5rem',
                    }}
                  />
                </Box>

                {/* Contenu Texte */}
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', sm: '1.05rem' },
                      wordBreak: 'break-all', // Empêche les débordements sur mobile
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Paper>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}