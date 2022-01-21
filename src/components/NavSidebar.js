import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import demoImage from '../images/demoProfile.png';
import useStyles from '../styles/NavSidebar';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#fff',
  color: '#1C7EBF',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiTypography-body1': {
    fontFamily: 'Montserrat !important',
  },
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '100vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    fontFamily: 'Montserrat',
    backgroundColor: '#155B89',
    color: '#C4C4C4',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const NavSidebar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const history = useHistory();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {/**Dashboard */}
            </Typography>
            <IconButton color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <div className={classes.profileImgDiv}>
              <img
                src={demoImage}
                alt='profile'
                className={classes.profileImg}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: [1],
            }}
          >
            <div className={classes.navHeader}>
              <h3>Fanstar</h3>
            </div>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon className={classes.closeDrawer} />
            </IconButton>
          </Toolbar>
          <Divider />
          <List className={classes.listDiv}>
            <ListItem
              button
              className={
                props.location.pathname.includes('/home')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/home')}
            >
              <ListItemIcon>
                <DashboardIcon className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem
              button
              className={
                props.location.pathname.includes('/artists')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/artists')}
            >
              <ListItemIcon>
                <ShoppingCartIcon className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText primary='Artists' />
            </ListItem>
            <ListItem
              button
              className={
                props.location.pathname.includes('/employees')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/employees')}
            >
              <ListItemIcon>
                <PeopleIcon className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText primary='Employees' />
            </ListItem>
            <ListItem
              button
              className={
                props.location.pathname.includes('/users')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/users')}
            >
              <ListItemIcon>
                <BarChartIcon className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText primary='Users' />
            </ListItem>
            <ListItem
              button
              className={
                props.location.pathname.includes('/payments')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/payments')}
            >
              <ListItemIcon>
                <LayersIcon className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText primary='Payments ' />
            </ListItem>
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              props.location.pathname.includes('/add')
                ? '#fff'
                : theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NavSidebar;
