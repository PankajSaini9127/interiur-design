import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, useMediaQuery, Drawer, List, ListItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        Home
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
        About Us
      </ListItem>
      <ListItem button component={Link} to="/services" onClick={toggleDrawer(false)}>
        Services
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
        Contact
      </ListItem>
    </List>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Interior Design Co.
          </Typography>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                {menuItems}
              </Drawer>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About Us</Button>
              <Button color="inherit" component={Link} to="/services">Services</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
