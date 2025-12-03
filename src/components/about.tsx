"use client"
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function About() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      id="about"
      sx={{
        paddingY: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            marginBottom: 4,
            color: isDark ? "#64b5f6": " #1784deff",
            textAlign: 'center',
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4} sx={{ marginBottom: 6 }}>
          <Grid size = {{ xs: 12 }}>
            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                marginBottom: 2,
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >
              I’m Christan Tchayep, a 22-year-old industrial computing student. I was born in Cameroon and have lived in Belgium since 2022.
               {/* Growing up in the early 2000s computer era, I started exploring the realms of Windows 95 and XP.
                */}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >
              Before starting my bachelor’s degree, I taught myself video editing, one of my hobbies, and began working as a freelance video editor in my free time. This early experience helped me develop the qualities that define me most today: patience, entrepreneurship, self-learning, and communication.
            </Typography>

            <br />

            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >

              My first bachelor’s degree at HELHa Mons sparked my curiosity for clean code practices and software architecture. My end-of-studies internship at Aproove further expanded my belief that code should be written first for other developers, and that architecture should limit or eliminate technical debt.
            </Typography>


            <br />

            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >
              My love for software and hardware led me to pursue a second bachelor’s degree in Industrial Computing at HELHa Charleroi. These studies have given me a deeper understanding of how our connected world works.
            </Typography>

            <br />

            <Typography
              variant="body1"
              sx={{
                color: isDark ? '#d0d0d0' : '#333333',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >
              These studies and experiences have given me a strong foundation to tackle tomorrow’s world and its challenges. My new goal is to gain what I’m missing: real years of experience inside a tech company.
            </Typography>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
