import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

// Example placeholder data (you could eventually fetch or import this)
const PROJECTS = [
  {
    title: "Sample Project One",
    description:
      "A brief description of this project, what was done, and its outcome.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Sample Project Two",
    description:
      "Another project description highlighting the work and result.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Sample Project Three",
    description: "Short explanation of the project’s goals and success.",
    image: "https://via.placeholder.com/600x400",
  },
];

const Projects = () => {
  return (
    <Box component="section" sx={{ paddingY: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", marginBottom: { xs: 4, md: 6 } }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Our Work
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            A selection of recent projects that showcase our approach and
            quality.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {PROJECTS.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6 }} md={4} key={index}>
              <Card elevation={3} sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
