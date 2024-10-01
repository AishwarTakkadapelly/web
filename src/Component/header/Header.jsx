import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const matches = useMediaQuery('(min-width:1280px)');
  const [state, setState] = React.useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-theme1-primary"
    >
      <div className="flex justify-end p-4">
        <IconButton aria-label="close" onClick={toggleDrawer('top', false)}>
          <CloseIcon className="text-theme1-primary-secoundary" />
        </IconButton>
      </div>
      <List>
        {[
          ['Platform', '/platform'],
          ['Solutions', '/solutions'],
          ['Resources', '/resources'],
          ['Pricing', '/pricing'],
          ['Documentation', '/documentation'],
          ['Contact Us', '/contactus'],
          ['Sign In', '/'],
          ['Sign Up', '/signup']
        ].map((item, index) => (
          <React.Fragment key={item[0]}>
            <ListItem disablePadding>
              <ListItemButton>
                <Link to={item[1]} className="text-xl font-semibold w-full text-center text-theme1-primary-secoundary">
                  <ListItemText primary={item[0]} />
                </Link>
              </ListItemButton>
            </ListItem>
            {index !== 7 && <Divider variant="middle" className="bg-theme1-primary-secoundary" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const mobileHeader = (
    <div className="flex items-center justify-between px-4 py-4 bg-theme1-primary" style={{ width: '100%', height: '60px' }}>
      <Link to="/" className="text-xl font-semibold text-theme1-primary-secoundary">MOVECLOUD</Link>
      <IconButton aria-label="menu" onClick={toggleDrawer('top', true)}>
        <MenuIcon className="text-theme1-primary-secoundary" />
      </IconButton>
      <Drawer anchor="top" open={state['top']} onClose={toggleDrawer('top', false)}>
        {list('top')}
      </Drawer>
    </div>
  );

  const desktopHeader = (
    <nav className="bg-theme1-primary text-theme1-primary-secoundary py-2">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        {/* Wrapper for logo */}
        <div className="h-20 w-20 lg:h-20 lg:w-20 overflow-hidden">
          <img src="/movecloudlogo.png" alt="MoveCloud" className="h-full w-full object-contain" />
        </div>
        <Link to="/" className="text-xl font-semibold text-theme1-primary-secoundary">
          MOVECLOUD
        </Link>
      </div>
      <ul className="flex space-x-10">
        {['Platform', 'Solutions', 'Resources', 'Pricing', 'Documentation', 'Contact Us'].map((text, index) => (
          <li key={index}>
            <Link to={`/${text.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-gray-400">
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex space-x-7">
        <Link to="/" className="bg-theme1-light-primary text-theme1-primary-secoundary py-2 px-9 rounded">
          Sign In
        </Link>
        <Link to="/signup" className="bg-theme1-light-primary text-theme1-primary-secoundary py-2 px-9 rounded">
          Sign Up
        </Link>
      </div>
    </div>
  </nav>
  
  );

  return (
    <>
      {matches ? desktopHeader : mobileHeader}
    </>
  );
};

export default Header;
