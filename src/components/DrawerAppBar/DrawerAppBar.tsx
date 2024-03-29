import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import Logo from 'src/assets/flashCardAppLogo.png';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name:"Home", 
    path:"/"
  },
  {
    name:"Terms & Conditions", 
    path:"/tc"
  },
  {
    name:"Privacy Statement", 
    path:"/ps"
  },
  {
    name:"About", 
    path:"/about"
  },
  {
    name:"Contact", 
    path:"/contact"
  },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AMC FlashCard
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={RouterLink} to={item.path} selected={location.pathname ==item.path ? true : false} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <RouterLink to={'/'}>
            <Avatar
              src={Logo}
              alt="AMC FlashCard"
              variant="rounded"
              sx={{ width: 50, height: 50, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            />
          </RouterLink>

          &nbsp; &nbsp;

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AMC FlashCard
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
            sx={{
              flexGrow: 1,
              alignItems: 'end',
              marginLeft: 'auto',
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <RouterLink to={'/'}>
              <Avatar
                src={Logo}
                alt="AMC FlashCard"
                variant="rounded"
                sx={{ width: 50, height: 50}}
              />
            </RouterLink>
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item,index) => (
              <Button 
                key={index} 
                sx={{ color: location.pathname === item.path ? '#c7c7c7' : '#fff' }}
                onClick={() => {navigate(item.path)}}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}