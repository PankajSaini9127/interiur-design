import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useTheme,
  ListItemIcon,
  ListItemText,
  Avatar,
  Fade
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from './logo-transparent.png';

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { 
    text: 'About Us', 
    icon: <InfoIcon />, 
    path: '/about',
    subItems: [
      { text: 'Our Team', path: '/about/team' },
      { text: 'Our History', path: '/about/history' },
      { text: 'Mission & Vision', path: '/about/mission' }
    ]
  },
  { text: 'Services', icon: <BuildIcon />, path: '/services' },
  { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' }
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [aboutMenuAnchor, setAboutMenuAnchor] = React.useState(null);

  const handleAboutMenu = (event) => setAboutMenuAnchor(event?.currentTarget || null);

  const DrawerContent = () => (
    <Box role="presentation" onClick={() => setDrawerOpen(false)} onKeyDown={() => setDrawerOpen(false)}>
      <Box sx={{ p: 1, borderBottom: 1, borderColor: 'divider', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Avatar sx={{ width: 40, height: 40, m: '0 auto', bgcolor: 'secondary.main' }}>ED</Avatar>
      </Box>
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem button component={Link} to={item.path} sx={{ 
              py: 1, 
              '&:hover': { 
                bgcolor: 'action.hover',
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': { color: 'primary.main' }
              }
            }}>
              <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            {item.subItems?.map(subItem => (
              <ListItem
                button
                key={subItem.text}
                component={Link}
                to={subItem.path}
                sx={{ pl: 6, '&:hover': { bgcolor: 'action.hover', color: 'primary.main' } }}
              >
                <ListItemText primary={subItem.text} sx={{ color: 'text.secondary' }} />
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: "transparent", borderBottom: 1, borderColor: 'divider', height: 'auto' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: '48px !important' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logo} alt="Era Design Logo" style={{ height: 32, width: 'auto' }} />
          </Box>

          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)} sx={{ p: 0.5 }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {menuItems.map((item) => (
                item.subItems ? (
                  <Box key={item.text}>
                    <Button
                      onClick={handleAboutMenu}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{ 
                        color: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
                        minHeight: '32px',
                        '&:hover': { bgcolor: 'action.hover' }
                      }}
                    >
                      <h3 style={{color:theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.papertext.primary,}}>{item.text}</h3>
                    </Button>
                    <Menu
                      anchorEl={aboutMenuAnchor}
                      open={Boolean(aboutMenuAnchor)}
                      onClose={() => handleAboutMenu()}
                      TransitionComponent={Fade}
                    >
                      {item.subItems.map((subItem) => (
                        <MenuItem
                          key={subItem.text}
                          component={Link}
                          to={subItem.path}
                          onClick={() => handleAboutMenu()}
                          sx={{ py: 1, '&:hover': { bgcolor: 'action.hover' } }}
                        >
                          {subItem.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    startIcon={item.icon}
                    sx={{ 
                      color: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.papertext.primary,
                      minHeight: '32px',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <h3 style={{color:theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.papertext.primary,}}>{item.text}</h3>
                    
                  </Button>
                )
              ))}
            </Box>
          )}

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ sx: { bgcolor: 'background.default' } }}
          >
            <DrawerContent />
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;