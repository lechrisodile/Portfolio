
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import GitHubIcon from '@mui/icons-material/GitHub'
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
      href: 'tel:+32 488 93 38 09',
    },
    {
      icon: LocationOnIcon,
      label: 'Location',
      value: 'Charleroi, Belgium',
      href: undefined,
    },
    // {
    //   icon: GitHubIcon,
    //   label: 'GitHub',
    //   value: 'github.com',
    //   href: 'https://github.com/StefanPopa2001',
    // },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com',
      href: 'https://www.linkedin.com/in/christan-tchayep-4240a5340/'
    },
  ]


  return (
    <Box
      id="contact"
      // sx={{
      //   minHeight: "100vh",
      //   display: "flex",
      //   alignItems: "center",
      //   py: 8,
      //   scrollMarginTop: "80px",
      // }}
      sx={{
        paddingY: 8,
        
      }}
    >
      <Container maxWidth="md">

        <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              marginBottom: 2,
              color: isDark ? '#64b5f6' : '#1784deff',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2.75rem' },
            }}
          >
            Let’s Work Together
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
            return (
              <Paper
                key={index}
                elevation={0}
                component={item.href ? ('a' as any) : ('div' as any)}
                href={item.href ?? undefined}
                target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href && item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  padding: 2,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  minHeight: 60,
                  minWidth: 230,
                  width: '100%',
                  textDecoration: 'none',
                  alignItems: 'flex-start',
                  gap: 2,
                  cursor: item.href ? 'pointer' : 'default',
                  '&:hover': item.href ? {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  } : {},
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 1,
                    flexShrink: 0,
                  }}
                >
                  <IconComponent
                    sx={{
                      color: isDark ? '#ffffff' : '#32a4ecc6',
                      fontSize: '1.25rem',
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#b0b0b0' : '#666666',
                      marginBottom: 0.5,
                      fontWeight: 500,
                      fontSize: { xs: '0.8rem', sm: '0.85rem' },
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: isDark ? '#ffffff' : '#000000ff',
                      fontSize: { xs: '0.85rem', sm: '0.95rem' },
                      wordBreak: 'break-word',
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
