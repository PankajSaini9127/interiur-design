import React from 'react';
import { Container, Typography, Box, Avatar, Grid } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          About Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" paragraph>
              We are a passionate team of interior designers who specialize in transforming spaces into beautiful and functional works of art. Our designs reflect the individuality of our clients while ensuring comfort and style.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether it's designing a new home, office, or commercial space, we offer personalized solutions tailored to meet the unique needs of each project.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Avatar
              alt="Founder"
              src="https://plus.unsplash.com/premium_photo-1661593314954-36f255aece2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VvfGVufDB8fDB8fHww"
              sx={{ width: 150, height: 150, margin: 'auto', display: 'block' }}
            />
            <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
              Jane Doe - Founder & Lead Designer
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
