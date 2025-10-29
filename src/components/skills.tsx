"use client"

import { Box, Container, Typography, Grid, Chip, Paper } from "@mui/material"

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Visual Basic", "C/C++"],
    },
    {
      category: "Web & App Development",
      skills: ["React", "Next.js", "T3 Stack", "Node.js", "Tailwind CSS", "Expo (React Native)"],
    },
    {
      category: "Automation & Embedded Systems",
      skills: ["PLC (Siemens S7-1516)", "TIA Portal", "HMI Design", "Arduino", "ESP32", "MPU6050 (DMP + Kalman Filter)", "Stepper Motors"],
    },
    {
      category: "Networking, Cloud & Security",
      skills: [
        "WireGuard VPN",
        "OpenVPN",
        "Docker",
        "Traefik",
        "Oracle Cloud",
        "Linux (Ubuntu / Rocky Linux)",
        "VirtualBox",
        "Network Simulation",
      ],
    },
  ]

  return (
    <Box
      id="skills"
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
          Skills
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 6, maxWidth: 800 }}
        >
          A multidisciplinary skill set bridging automation, software development, and infrastructure.  
          I design connected, secure, and scalable systems — combining industrial engineering, embedded control, and modern cloud technologies.
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid size={12} sx={{ md: 6 }} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                  {category.category}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Chip key={skillIndex} label={skill} color="primary" variant="outlined" />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
