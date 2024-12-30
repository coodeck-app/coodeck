'use client';
import { Container, Grid, Typography, Box, IconButton, Link, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const footerLinks = {
    Platform: ['How it Works', 'Browse Jobs', 'For Clients', 'For Freelancers'],
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Resources: ['Blog', 'Help Center', 'Guidelines', 'Success Stories'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Code of Conduct']
  };

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          {/* Logo and Social Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Coodeck
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Empowering African talent through global opportunities
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} sm={3} key={category}>
              <Typography variant="h6" gutterBottom>
                {category}
              </Typography>
              <Stack spacing={1}>
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    variant="body2"
                    color="text.secondary"
                    sx={{ '&:hover': { color: 'primary.main' } }}
                  >
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 5, pt: 4, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Coodeck. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
