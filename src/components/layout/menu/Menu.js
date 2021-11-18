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
import SettingsIcon from '@mui/icons-material/SettingsSuggest';
import { history } from '../../../App';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { layoutActions } from '../../../store/layout-slice';
import React from 'react';
import routes from '../../content/Routes/routes'
import {v4 as uuid} from 'uuid'
const Menu = () => {
    const dispatch = useDispatch();
    const [showMenu,setShowMenu] = useState(false);
    const breadcrumbs = '404'
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
    
    // const list = (anchor) => (
    //     <Box
    //       sx={{ width: 250 }}
    //       role="presentation"
    //       onClick={toggleDrawer(false)}
    //       onKeyDown={toggleDrawer(false)}
    //     >
    //       <List>
    //       <ListItem disablePadding>
    //         <ListItemButton onClick={()=>{
    //             history.push('/')
    //         }}>
    //           <ListItemIcon>
    //             <HomeIcon />
    //           </ListItemIcon>
    //           <ListItemText primary="HOME" />
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         <ListItemButton onClick={()=>{
    //             history.push('/login')
    //         }}>
    //           <ListItemIcon>
    //             <LoginIcon />
    //           </ListItemIcon>
    //           <ListItemText primary="Log In" />
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         <ListItemButton onClick={()=>{
    //             history.push('/settings')
    //         }}>
    //           <ListItemIcon>
    //             <SettingsIcon />
    //           </ListItemIcon>
    //           <ListItemText primary="Settings/Options" />
    //         </ListItemButton>
    //       </ListItem>
    //     </List>
    //     </Box>
    //   );
    
    const list = (anchor) => {
      const finalMenuList = [];
      routes.forEach(route=>{
        if(route.authorization === authStatus){
          finalMenuList.push(<ListItem key={uuid()} disablePadding>
                 <ListItemButton onClick={()=>{
                        history.push(route.path)
                     }}>
                       <ListItemIcon>
                        {React.createElement(route.icon)}
                      </ListItemIcon>
                       <ListItemText primary={route.title} />
                    </ListItemButton>
                  </ListItem>)
        }
      })
      return finalMenuList;
    }
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
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
            {list()}
            </List>
            </Box>
          </Drawer>
        </Box>
      );
}
export default Menu;