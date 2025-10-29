"use client"

import type React from "react"

import { Box, Container, Typography, TextField, Button, Grid, Paper } from "@mui/material"
import { Email, LinkedIn, GitHub } from "@mui/icons-material"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Box
      id="contact"
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
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: 800 }}>
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and
          industrial IT.
        </Typography>

        <Grid container spacing={4}>
          <Grid  size={12} sx={{md: 6}}>
            <Paper sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          <Grid  size={12} sx={{md:6}}>
            <Paper sx={{ p: 4, height: "100%" }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Connect With Me
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Email color="primary" />
                  <Typography>your.email@example.com</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LinkedIn color="primary" />
                  <Typography>linkedin.com/in/yourprofile</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <GitHub color="primary" />
                  <Typography>github.com/yourusername</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
