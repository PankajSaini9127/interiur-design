import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Contact Us
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="body1" paragraph align="center">
            Have a question or ready to start your project? Reach out to us!
          </Typography>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
              Send Message
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
