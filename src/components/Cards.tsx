"use client";
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="hover-lift"
    >
      <Card
        className="glass-effect"
        sx={{
          maxWidth: { xs: '100%', sm: '345px' },
          m: { xs: 1, sm: 2 },
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            background: 'rgba(255,255,255,0.15)',
          },
        }}
      >
        <CardContent>
          <Box sx={{ mb: 2, color: 'primary.main' }}>{icon}</Box>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
