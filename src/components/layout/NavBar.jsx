import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Home, Twitter, Telegram, Menu } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { useTheme } from "@mui/material/styles"; // To handle theme-based breakpoints

import { useLocation } from "react-router-dom";

import {
  NAVBAR_HEIGHT_XS,
  NAVBAR_HEIGHT_MD,
  NAV_LINKS,
} from "../../constants/siteConstants";

import { LINKS } from "../../constants/siteConstants"; // Import the constants file

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detects screens smaller than md (960px)

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const location = useLocation();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: "none",
        backdropFilter: "blur(10px)", // Optional blur effect
        height: { xs: NAVBAR_HEIGHT_XS, md: NAVBAR_HEIGHT_MD },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: { xs: NAVBAR_HEIGHT_XS, md: NAVBAR_HEIGHT_MD },
        }}
      >
        {/* Left Section (Home Icon) */}
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            aria-label="Home"
            component={Link}
            to="/"
            color="secondary"
            sx={{ fontSize: { xs: "small", md: "large" } }}
          >
            <Home fontSize="large" />
          </IconButton>
        </Box>

        {/* Centered Section (Navigation Links OR Mobile Menu) */}
        {isMobile ? (
          // Show hamburger menu for small screens
          <IconButton
            color="secondary"
            onClick={toggleDrawer(true)}
            aria-label="Menu"
            sx={{ fontSize: { xs: "small", md: "large" } }}
          >
            <Menu fontSize="large" />
          </IconButton>
        ) : (
          // Show regular navigation links for larger screens
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: { xs: 1, md: 2 },
            }}
          >
            {NAV_LINKS.map((link) => (
              <Button
                key={link.text}
                component={Link}
                to={link.path}
                color={
                  location.pathname === link.path ? "primary" : "secondary"
                }
                sx={{ fontSize: { xs: "small", md: "large" } }}
              >
                {link.text}
              </Button>
            ))}
          </Box>
        )}

        {/* Right Section (External Links) */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            aria-label="Twitter"
            href={LINKS.twitter}
            target="_blank"
            rel="noopener"
            color="secondary"
            sx={{ fontSize: { xs: "small", md: "large" } }}
          >
            <XIcon fontSize="large" />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer for Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {NAV_LINKS.map((link) => (
            <ListItem
              button
              key={link.text}
              component={Link}
              to={link.path}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
