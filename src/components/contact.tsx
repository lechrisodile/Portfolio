import { Box, Container, Typography, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export function Contact() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const contactItems = [
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
      href: 'tel:+32488933809',
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
      href: undefined,
    }
  ]

  return (
    <Box
      id="contact"
      sx={{
        paddingY: 8,
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
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2.75rem' },
              
              // --- C'est ici que j'ai remis le dégradé ---
              background: isDark 
                ? `linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)` // Dégradé Mode Sombre
                : `linear-gradient(45deg, #1784de 30%, #9c27b0 90%)`, // Dégradé Mode Clair (Ton bleu vers violet)
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let’s work together
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: isDark ? '#b0b0b0' : '#666666',
              fontSize: { xs: '0.95rem', sm: '1rem' },
              lineHeight: 1.6,
            }}
          >
            I'm always open to discussing new opportunities, collaborations,
            or just having a chat about technology and industrial computing.
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
                target={isLink && item.href.startsWith('http') ? '_blank' : undefined}
                rel={isLink && item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  padding: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                  
                  textDecoration: 'none',
                  cursor: isLink ? 'pointer' : 'default',
                  
                  '&:hover': isLink ? {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? '#64b5f6' : '#1784deff', // Bordure bleue au survol
                  } : {},
                }}
              >
                {/* Icon Box */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(23, 132, 222, 0.05)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(23, 132, 222, 0.1)'}`,
                    borderRadius: 1,
                    flexShrink: 0,
                  }}
                >
                  <IconComponent
                    sx={{
                      color: isDark ? '#ffffff' : '#1784deff',
                      fontSize: '1.5rem',
                    }}
                  />
                </Box>

                {/* Text Content */}
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#b0b0b0' : '#666666',
                      marginBottom: 0.5,
                      fontWeight: 500,
                      fontSize: '0.85rem',
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: isDark ? '#ffffff' : '#000000',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      wordBreak: 'break-all',
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