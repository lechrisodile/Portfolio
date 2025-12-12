import { Box, Container, Typography, Grid, Paper, Chip, Stack } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
// Sécurisation de l'import des drapeaux
import * as Flags from 'country-flag-icons/react/3x2'
// Import des icônes
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BoltIcon from '@mui/icons-material/Bolt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SearchIcon from '@mui/icons-material/Search';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';

export function Skills() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const softSkills = [
    {
      skill: "Adaptability & Initiative",
      icon: <BoltIcon />,
      color: "#f59e0b", // Amber
      situation: "During the Automated Warehouse project, I realized that my teammates had lost interest in the work, leaving me to handle the project largely on my own.",
      action: "I took the initiative to bring the necessary equipment home and work independently to ensure progress. By reorganizing the tasks and managing the development alone, I successfully completed the project.",
      result: "The final system worked flawlessly, and the group ultimately succeeded thanks to my dedication and problem-solving efforts."
    },
    {
      skill: "Teamwork & Conflict Resolution",
      icon: <Diversity3Icon />,
      color: "#10b981", // Emerald
      situation: "During the Electronic Dice Game project, our team had to organize tasks efficiently to ensure the project's success.",
      action: "We started by asking each team member to present their strengths and areas for improvement. Tasks were then assigned based on each person's strengths, while team members helped and advised each other in their weaker areas.",
      result: "The project was completed successfully, and the team gained new skills and confidence. This approach strengthened collaboration, improved individual performance, and demonstrated the value of mutual support in achieving project goals."
    },
    {
      skill: "Problem Solving & Analytical Thinking",
      icon: <SearchIcon />,
      color: "#3b82f6", // Blue
      situation: "At the beginning of the automated warehouse project, we were unable to get the stepper motors to work, which was holding up progress on the project. My task was to identify the cause of the problem and get the motor working so that we could continue developing the system.",
      action: "I attentively studied the datasheet, reviewed the wiring, and systematically tested the connections. This allowed me to identify the error and correct it.",
      result: "The motor worked correctly, allowing the project to progress. I also learned the importance of thoroughly understanding a component’s documentation before using it."
    },
    {
      skill: "Autonomy & Responsibility",
      icon: <AutoAwesomeIcon />,
      color: "#8b5cf6", // Violet
      situation: "Financing my studies requires me to work student jobs while maintaining high academic standards.",
      action: "I developed a strict schedule management system to balance work shifts and study time effectively.",
      result: "I have maintained a high GPA while being financially independent, demonstrating my ability to manage heavy workloads."
    }
  ]
  const hardSkills = {
    industrial: [
      "Siemens PLC (TIA Portal)",
      "Schneider Electric PLC",
      "HMI/SCADA Design",
      "Microcontrollers (ESP32, Arduino)",
      "Industrial IoT (IIoT)",
      "Embedded C/C++",
      "Industrial Networks (Profinet, Modbus)",
      "Automation & Robotics",
      "PID Control Loop",
      "MES 4.0 / ERP Integration",
      "Digital Twin (CIROS)",
    ],
    programming: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python (Data & Scripting)",
      "Java",
      "React.js & Next.js",
      "Node.js & Express",
      "React Native (Mobile)",
      "Visual Basic (Legacy Support)",
    ],
    infrastructure: [
      "SQL (MySQL, PostgreSQL)",
      "Docker & Containerization",
      "Linux Administration",
      "Windows Server",
      "Reverse Proxy (Traefik)",
      "Node-RED (Flow-based)",
      "ORM (Prisma)",
      "Network Services (Radius, DHCP, DNS)",
    ],
  }
  const skillCategories = [
    {
      title: 'Industrial Computing & Automation',
      skills: hardSkills.industrial,
      icon: <PrecisionManufacturingIcon color="primary" />,
      color: theme.palette.primary.main
    },
    {
      title: 'Software Development',
      skills: hardSkills.programming,
      icon: <CodeIcon color="secondary" />,
      color: theme.palette.secondary.main
    },
    {
      title: 'IT Infrastructure & Data',
      skills: hardSkills.infrastructure,
      icon: <StorageIcon color="info" />,
      color: theme.palette.info.main
    },
  ]

  // @ts-ignore
  const FlagFR = Flags.FR || null;
  // @ts-ignore
  const FlagGB = Flags.GB || null;

  const languages = [
    { name: 'French', flag: FlagFR, level: 'Native Speaker' },
    { name: 'English', flag: FlagGB, level: 'Basic (A1) - Technical Reading' },
  ]

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >

        {/* --- PARTIE 1 : SOFT SKILLS --- */}
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Box sx={{ mb: 6, textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mt: 1,
                mb: 2,
                background: isDark
                  ? `linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)`
                  : `linear-gradient(45deg, #1784de 30%, #9c27b0 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Soft Skills
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
              Strengths developed and proven in practical challenges
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 10 }}>

          <Grid container spacing={4}>
            {softSkills.map((skill, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    border: `1px solid ${alpha(skill.color, 0.3)}`,
                    bgcolor: isDark ? alpha(skill.color, 0.05) : '#fff',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Bandeau de couleur décoratif */}
                  <Box sx={{
                    position: 'absolute', top: 0, left: 0, width: '4px', height: '100%',
                    bgcolor: skill.color
                  }} />

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{
                      p: 1, borderRadius: '50%', bgcolor: alpha(skill.color, 0.1), color: skill.color, display: 'flex'
                    }}>
                      {skill.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={700}>
                      {skill.skill}
                    </Typography>
                  </Box>

                  <Stack spacing={1.5}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {skill.situation}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {skill.action}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {skill.result}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ---LANGUES --- */}
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h5" fontWeight={700} textAlign="center" sx={{ mb: 4 }}>
            Languages
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {languages.map((lang, index) => {
              const FlagComponent = lang.flag
              return (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 45,
                        boxShadow: 2,
                        borderRadius: 1,
                        overflow: 'hidden',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'grey.200'
                      }}
                    >
                      {FlagComponent ? (
                        <FlagComponent title={lang.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <Typography variant="caption">N/A</Typography>
                      )}
                    </Box>

                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        {lang.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lang.level}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Container>


        {/* --- PARTIE 2 : HARD SKILLS --- */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Box sx={{ mb: 10 }}>
          <Box sx={{ mb: 6, textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mt: 1,
                mb: 2,
                background: isDark
                  ? `linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)`
                  : `linear-gradient(45deg, #1784de 30%, #9c27b0 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hard Skills
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
              My technical toolkit bridging industrial hardware and modern software.
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="stretch">
            {skillCategories.map((category, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex' }}>
                <Paper
                  elevation={isDark ? 2 : 1}
                  sx={{
                    p: 3,
                    width: '100%',
                    borderRadius: 4,
                    border: `1px solid ${alpha(category.color, 0.2)}`,
                    backgroundColor: isDark ? alpha(category.color, 0.05) : '#fff',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, pb: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
                    {category.icon}
                    <Typography variant="h6" fontWeight={700}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant="outlined"
                        sx={{
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          borderColor: alpha(category.color, 0.3),
                          color: isDark ? 'text.primary' : 'text.dark',
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>


    </Box>
  )


}