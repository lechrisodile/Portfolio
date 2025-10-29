"use client"

import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import { School, Code, Engineering } from "@mui/icons-material"

export function About() {
  const highlights = [
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: "Education",
      description:
        "Third-year Industrial IT student, graduating this year with focus on automation and embedded systems",
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: "Development",
      description: "Experienced in modern web technologies and industrial software development",
    },
    {
      icon: <Engineering sx={{ fontSize: 40 }} />,
      title: "Industrial Focus",
      description: "Bridging the gap between traditional industrial systems and modern IT solutions",
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
        scrollMarginTop: "80px", // Added scroll margin to account for fixed navbar
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: 800 }}>
          I'm a passionate Industrial IT student in my final year, combining technical expertise with practical
          industrial knowledge. My goal is to create innovative solutions that improve efficiency and connectivity in
          industrial environments.
        </Typography>

        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid  size={12} sx={{md: 4}} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}

              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
