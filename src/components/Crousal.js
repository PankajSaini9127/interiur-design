import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, useTheme,Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

const carouselStyles = {
  container: {
    width: '100%',
    height: '100vh',
    position: 'relative',
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    height: '100vh',
    position: 'relative',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.17)',
    padding: '2rem',
    borderRadius: '8px',
  },
  button: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '1rem',
    transition: 'background-color 0.3s',
  }
};

function FullScreenCarousel() {

    const theme = useTheme();
  const items = [
    {
      image: '/assets/Carusal/1.jpeg',
      description: 'Description for Slide 1',
    },
    {
      image: '/assets/Carusal/2.jpeg',
      description: 'Description for Slide 2',
    },
    {
      image: '/assets/Carusal/3.jpeg',
      description: 'Description for Slide 3',
    },
    {
      image: '/assets/Carusal/4.jpeg',
      description: 'Description for Slide 4',
    },
    {
      image: '/assets/Carusal/5.jpeg',
      description: 'Description for Slide 5',
    },
  ];

  return (
    <div style={carouselStyles.container}>
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={true}
        emulateTouch
        swipeable
        useKeyboardArrows
        transitionTime={500}
      >
        {items.map((item, index) => (
          <div key={index} style={carouselStyles.slide}>
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              style={carouselStyles.image}
            />
            <div style={carouselStyles.content}>
              {/* <h2>{item.description}</h2>
              <button style={carouselStyles.button}>
                Learn More
              </button> */}
              <Typography  variant="h2" sx={{color:theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper}} gutterBottom align="center">
                          Welcome to Era Design
                        </Typography>
                        <Typography variant="h6" align="center">
                          Your dream space, beautifully designed! Explore our services to create the perfect ambiance for your home or office.
                        </Typography>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default FullScreenCarousel;