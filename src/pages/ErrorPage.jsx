import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        paddingX: 2,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" color="primary" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Something went wrong. The page you’re looking for doesn’t exist or an
          error occurred.
        </Typography>

        {error?.statusText || error?.message ? (
          <Typography variant="body2" color="error" sx={{ mb: 3 }}>
            {error.statusText || error.message}
          </Typography>
        ) : null}

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate("/")}
        >
          Go to Homepage
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorPage;
