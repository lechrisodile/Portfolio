"use client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"

const education = [
    {
        type: "education",
        title: "Master en Automatisme et Informatique Industrielle",
        institution: "École d'Ingénieurs",
        location: "Paris, France",
        period: "2014 - 2016",
        description:
            "Spécialisation en systèmes de contrôle avancés, robotique industrielle et intelligence artificielle appliquée.",
    },
    {
        type: "education",
        title: "Licence en Génie Électrique",
        institution: "Université de Technologie",
        location: "Lyon, France",
        period: "2011 - 2014",
        description: "Formation fondamentale en électronique, automatisme et systèmes embarqués.",
    },
]

const experience = [
    {
        type: "work",
        title: "Ingénieur Automaticien Senior",
        institution: "Groupe Industriel International",
        location: "Paris, France",
        period: "2020 - Présent",
        description:
            "Conception et mise en œuvre de systèmes d'automatisation complexes, direction d'équipes techniques, optimisation des processus industriels.",
    },
    {
        type: "work",
        title: "Ingénieur Développement Logiciel Industriel",
        institution: "Société de Conseil en Ingénierie",
        location: "Lyon, France",
        period: "2017 - 2020",
        description: "Développement d'applications SCADA, programmation d'automates, intégration de systèmes IoT.",
    },
    {
        type: "work",
        title: "Ingénieur Automaticien Junior",
        institution: "Entreprise Manufacturière",
        location: "Grenoble, France",
        period: "2016 - 2017",
        description: "Programmation d'automates Siemens, maintenance des systèmes de contrôle, support technique.",
    },
]

const TimelineItem = ({ item, isLast }) => (
    <Box sx={{ position: "relative", pl: { xs: 4, md: 6 }, pb: isLast ? 0 : 6 }}>
        <Box
            sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                borderRadius: "50%",
                backgroundColor: item.type === "education" ? "primary.main" : "secondary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                zIndex: 1,
            }}
        >
            {item.type === "education" ? <SchoolIcon /> : <WorkIcon />}
        </Box>

        {!isLast && (
            <Box
                sx={{
                    position: "absolute",
                    left: { xs: 19, md: 23 },
                    top: { xs: 48, md: 56 },
                    bottom: 0,
                    width: 2,
                    backgroundColor: "divider",
                }}
            />
        )}

        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                ml: { xs: 2, md: 3 },
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "translateX(4px)",
                    boxShadow: 2,
                },
            }}
        >
            <Typography
                variant="caption"
                sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor: "action.hover",
                    fontWeight: 600,
                    display: "inline-block",
                    mb: 1,
                }}
            >
                {item.period}
            </Typography>

            <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                {item.title}
            </Typography>

            <Typography variant="body2" color="primary" fontWeight={500} sx={{ mb: 0.5 }}>
                {item.institution}
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
                {item.location}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {item.description}
            </Typography>
        </Paper>
    </Box>
)

export default function Education() {
    return (
        <Box
            id="formation"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: "background.paper",
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ mb: 8, textAlign: "center" }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: "primary.main",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            letterSpacing: "0.1em",
                        }}
                    >
                        Parcours
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            mt: 2,
                            mb: 2,
                        }}
                    >
                        Formation & Expérience
                    </Typography>
                </Box>

                <Box sx={{ mb: 6 }}>
                    <Typography variant="h4" fontWeight={600} sx={{ mb: 4 }}>
                        Expérience Professionnelle
                    </Typography>
                    {experience.map((item, index) => (
                        <TimelineItem key={index} item={item} isLast={index === experience.length - 1} />
                    ))}
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight={600} sx={{ mb: 4 }}>
                        Formation Académique
                    </Typography>
                    {education.map((item, index) => (
                        <TimelineItem key={index} item={item} isLast={index === education.length - 1} />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}
