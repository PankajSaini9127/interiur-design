import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', padding: '20px 0', marginTop: 'auto' }}>
      <Container>
        {/* Footer content */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left side - Company name */}
          <Typography variant="body1" color="text.secondary">
            &copy; {new Date().getFullYear()} Interior Design Co. All Rights Reserved.
          </Typography>

          {/* Right side - Social Media Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <IconButton color="primary">
                <InstagramIcon />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
