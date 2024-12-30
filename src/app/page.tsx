import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CloudIcon from '@mui/icons-material/Cloud';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ServiceCard from '@/components/Cards';

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
