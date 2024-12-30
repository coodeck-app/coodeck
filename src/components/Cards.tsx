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
      whileHover={{ scale: 1.02 }}
    >
      <Card
        className="smooth-shadow"
        sx={{
          maxWidth: { xs: '100%', sm: 345 },
          m: { xs: 1, sm: 2 },
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            background: 'rgba(255,255,255,0.15)',
          },
        }}
      >
        <CardContent>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            <Box sx={{ 
              mb: 2, 
              color: 'primary.main',
              transform: 'scale(1.2)',
              textAlign: 'center'
            }}>
              {icon}
            </Box>
          </motion.div>
          <Typography 
            variant="h5" 
            component="div"
            sx={{ 
              mb: 2,
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
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
