import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import FullScreenCarousel from './Crousal';

const Home = () => {
  // Updated designItems array with additional details for each service
  const designItems = [
    {
      title: "🏡 Residential Interior Design",
      description: (
        <>
          <ul>
            <li>Home renovations & makeovers</li>
            <li>Furniture selection & layout planning</li>
            <li>Smart home integration</li>
            <li>Sustainable & eco-friendly designs</li>
          </ul>
        </>
      ),
      image: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Residential Design"
    },
    {
      title: "🏢 Commercial Interior Design",
      description: (
        <>
          <ul>
            <li>Office spaces & co-working environments</li>
            <li>Retail store design</li>
            <li>Hospitality & restaurant interiors</li>
            <li>Wellness spaces (gyms, spas, clinics)</li>
          </ul>
        </>
      ),
      image: "https://images.unsplash.com/photo-1595846265893-f433f6cca81d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwRGVzaWdufGVufDB8fDB8fHww",
      alt: "Commercial Design"
    },
    {
      title: "🎨 Specialized Services",
      description: (
        <>
          <strong>3D Visualization & Virtual Reality (VR) Tours</strong>
          <p>Use 3D rendering, augmented reality (AR), and virtual reality (VR) to help clients visualize their spaces before execution. This is particularly useful for large projects, real estate staging, and online consultations.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2l0Y2hlbiUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Specialized Services"
    },
  ];

  return (
    <>
      <FullScreenCarousel />
      <Box sx={{ padding: 3 }}>
        <Container>
          <Typography variant="h3" gutterBottom align="center">
            Welcome to Era Design
          </Typography>
          <Typography variant="h6" paragraph align="center">
            Your dream space, beautifully designed! Explore our services to create the perfect ambiance for your home or office.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {designItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.alt}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
