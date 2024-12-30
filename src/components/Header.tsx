'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <AppBar 
      position="fixed" 
      className="gradient-bg" 
      sx={{ 
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none'
      }}
    >
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="floating"
        >
          <Box component="h1" sx={{ 
            fontWeight: 'bold', 
            fontSize: { xs: '1.5rem', md: '2rem' },
            background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Coodeck
          </Box>
        </motion.div>
        
        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', gap: 2 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                href={`#${item.toLowerCase()}`}
                className="smooth-shadow"
                sx={{
                  color: 'white',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {item}
              </Button>
            </motion.div>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ 
            ml: 'auto',
            display: { xs: 'block', md: 'none' },
            color: 'white'
          }}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <Box sx={{ width: 250, pt: 2 }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item}>
                  <Button
                    fullWidth
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      py: 1.5,
                      '&:hover': {
                        background: 'rgba(33,150,243,0.1)'
                      }
                    }}
                  >
                    {item}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
