import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

const Services = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Our Services
        </Typography>
  <Grid container spacing={4} justifyContent="center">
          {/* Residential Design */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Living Room"
              />
              <CardContent>
                <Typography variant="h6">Residential Designs</Typography>
                <Typography variant="body2" color="text.secondary">
                  We specialize in residential spaces that blend style and comfort.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Commercial Design */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1595846265893-f433f6cca81d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwRGVzaWdufGVufDB8fDB8fHww"
                alt="Office Design"
              />
              <CardContent>
                <Typography variant="h6">Commercial Designs</Typography>
                <Typography variant="body2" color="text.secondary">
                  Our commercial designs maximize productivity while offering style.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Kitchen Design */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2l0Y2hlbiUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Kitchen Design"
              />
              <CardContent>
                <Typography variant="h6">Kitchen Designs</Typography>
                <Typography variant="body2" color="text.secondary">
                  A well-designed kitchen is the heart of any home. Let us create yours.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
