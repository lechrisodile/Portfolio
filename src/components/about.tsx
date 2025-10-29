"use client"

import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import { School, Code, Engineering, Memory,Smartphone, Language, Security, Cloud, Terminal } from "@mui/icons-material"

export function About() {
  const highlights = [
  {
    icon: <School sx={{ fontSize: 40 }} />,
    title: "Education",
    description:
      "Industrial IT student passionate about automation and Industry 4.0. Always learning how to bridge industrial systems with modern software technologies.",
  },
  {
    icon: <Terminal sx={{ fontSize: 40 }} />,
    title: "Software & System Integration",
    description:
      "I love connecting the digital and physical worlds — from designing automation logic to building software that communicates with industrial hardware.",
  },
  {
    icon: <Cloud sx={{ fontSize: 40 }} />,
    title: "Full-Stack & Cloud Development",
    description:
      "I design clean, efficient web and mobile solutions using modern stacks like Next.js and React Native, often deployed on secure, cloud-based infrastructures.",
  },
  {
    icon: <Engineering sx={{ fontSize: 40 }} />,
    title: "Innovation & Automation",
    description:
      "Keen on developing intelligent, autonomous systems that combine sensors, control logic, and data analysis to optimize industrial processes.",
  },
]


  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 8,
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
          About Me
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 6, maxWidth: 800 }}
        >
          Passionate about industrial technology and intelligent systems, I combine technical expertise with a
          forward-thinking mindset to design efficient, connected, and sustainable solutions. My goal is to bridge
          automation, software development, and artificial intelligence to shape the future of smart industry.
        </Typography>

        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid size={12} sx={{ md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
