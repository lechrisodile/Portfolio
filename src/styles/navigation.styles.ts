 const navigationStyles = {
  navbar: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "1rem 2rem",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid",
    transition: "all 0.3s ease",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  navLink: {
    fontSize: "0.95rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.3s ease",
    textDecoration: "none",
  },
  themeToggle: {
    marginLeft: "1rem",
  },
}
