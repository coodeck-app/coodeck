"use client";
import { Container, Typography, Box, Grid, IconButton, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CloudIcon from '@mui/icons-material/Cloud';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ServiceCard from '@/components/Cards';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        }}
      >
        <Container>
          <Typography
            component={motion.h1}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            variant="h2"
            color="white"
            gutterBottom
          >
            Welcome to Coodeck
          </Typography>
          <Typography
            component={motion.p}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variant="h5"
            color="white"
          >
            Africa's Premier Freelancing Platform
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom align="center">
          Our Services
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Web Development"
              description="Expert web development services using modern technologies"
              icon={<CodeIcon fontSize="large" />}
              delay={0.2}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="UI/UX Design"
              description="Beautiful and intuitive design solutions"
              icon={<DesignServicesIcon fontSize="large" />}
              delay={0.4}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              title="Cloud Solutions"
              description="Scalable cloud infrastructure and deployment"
              icon={<CloudIcon fontSize="large" />}
              delay={0.6}
            />
          </Grid>
        </Grid>
      </Container>

      {/* About Section */}
      <Box component="section" id="about" sx={{ py: 12, bgcolor: 'background.paper' }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h3" gutterBottom>
                  About Coodeck
                </Typography>
                <Typography variant="body1" paragraph>
                  We connect talented African freelancers with global opportunities,
                  fostering innovation and growth across the continent.
                </Typography>
                <Typography variant="body1">
                  Our platform ensures seamless collaboration, secure payments,
                  and professional growth for both clients and freelancers.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ position: 'relative', height: '400px' }}>
                  <Image
                    src="/about-image.jpg"
                    alt="About Coodeck"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '10px' }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box component="section" id="projects" sx={{ py: 12 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      '&:hover': { transform: 'translateY(-8px)', transition: '0.3s' }
                    }}
                  >
                    <WorkIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      Project {item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of successful project completed through Coodeck.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box component="section" id="contact" sx={{ py: 12, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Get in Touch
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 4 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" variant="outlined" type="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ py: 2 }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Scroll to Top */}
      <IconButton
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': { bgcolor: 'primary.dark' },
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </main>
  );
}
