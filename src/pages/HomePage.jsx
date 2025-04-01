import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box component="section" sx={{ paddingY: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", marginBottom: { xs: 4, md: 6 } }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Quality Services You Can Trust
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Reliable, professional, and tailored to your needs.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/contact"
          >
            Get in Touch
          </Button>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ marginBottom: { xs: 4, md: 6 } }}>
          {[
            {
              title: "Tailored Solutions",
              description:
                "Services designed to meet your unique requirements.",
            },
            {
              title: "Experienced Team",
              description: "Professional results backed by years of expertise.",
            },
            {
              title: "End-to-End Support",
              description: "We’re with you from start to finish.",
            },
          ].map((feature) => (
            <Grid size={{ xs: 12, md: 4 }} key={feature.title}>
              <Card elevation={3} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            paddingY: { xs: 4, md: 6 },
            backgroundColor: "background.default",
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Explore Our Work and Discover What We Can Do for You
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/projects"
          >
            View Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
