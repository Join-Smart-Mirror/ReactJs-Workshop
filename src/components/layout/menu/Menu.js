import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import { history } from '../../../App';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { layoutActions } from '../../../store/layout-slice';
const Menu = () => {
    const dispatch = useDispatch();
    const [showMenu,setShowMenu] = useState(false);
    const breadcrumbs = useSelector(state=>state.layout.breadcrumbs)
    const authStatus = useSelector(state=>state.layout.authorizationStatus)

    const logHandler = () =>{
      if(authStatus){
        localStorage.removeItem('token');
        dispatch(layoutActions.setAuthorizationStatus(false))
        history.push('/login')
        return;
      }
      history.push('/login')
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setShowMenu(open);
    };
    
    const list = (anchor) => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
                history.push('/')
            }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HOME" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
                history.push('/login')
            }}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Log In" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
      );
    
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {breadcrumbs}
              </Typography>
              <Button color="inherit" onClick={logHandler}>{authStatus ? 'Log out': 'Log in' }</Button>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor='left'
            open={showMenu}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </Box>
      );
}
export default Menu;