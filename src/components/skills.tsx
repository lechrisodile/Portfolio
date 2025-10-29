"use client"

import { Box, Container, Typography, Grid, Chip, Paper } from "@mui/material"

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Java"],
    },
    {
      category: "Web Development",
      skills: ["React", "Next.js", "Node.js", "HTML/CSS", "Material-UI"],
    },
    {
      category: "Industrial Technologies",
      skills: ["PLC Programming", "SCADA Systems", "Industrial IoT", "Automation", "Embedded Systems"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "Linux", "VS Code", "Arduino"],
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
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: 800 }}>
          A comprehensive set of technical skills spanning software development, industrial automation, and modern web
          technologies.
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid  size={12} sx={{md: 6}} key={index}>
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
