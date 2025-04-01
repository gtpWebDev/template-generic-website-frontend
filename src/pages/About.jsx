import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const About = () => {
  return (
    <Box component="section" sx={{ paddingY: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Intro Section */}
        <Box sx={{ textAlign: "center", marginBottom: { xs: 4, md: 6 } }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            A little background on who we are and what we do.
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We’re a dedicated team of professionals passionate about
              delivering high-quality, reliable services tailored to your needs.
              With a strong focus on craftsmanship and customer satisfaction,
              we’ve built our reputation one project at a time.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              What Sets Us Apart
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We pride ourselves on attention to detail, clear communication,
              and results that speak for themselves. Whether you’re looking for
              a small upgrade or a full transformation, we approach every job
              with the same level of care and commitment.
            </Typography>
          </Grid>
        </Grid>

        {/* Optional Values or Team Section */}
        <Grid container spacing={4} sx={{ marginTop: { xs: 6, md: 8 } }}>
          {[
            {
              title: "Experience",
              description:
                "Years of industry knowledge and hands-on expertise.",
            },
            {
              title: "Integrity",
              description: "We believe in honest work and clear expectations.",
            },
            {
              title: "Customer Focus",
              description: "Your satisfaction is our top priority.",
            },
          ].map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Card elevation={2} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
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
  );
};

export default About;
