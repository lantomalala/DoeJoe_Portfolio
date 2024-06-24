import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
      <h3 style={{textAlign:'center', padding:'15px'}}>Menu</h3>
      <List style={{paddingTop:'50px', }}>
        {['Accueil', 'About', 'Experiences', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding style={{paddingTop:'10%'}}>
            <ListItemButton component={Link} to={text === 'Accueil' ? '/' : `/${text.toLowerCase()}`}>
              <ListItemIcon>
              {index % 4 === 0 ? <HomeIcon /> : index % 4 === 1 ? <InfoIcon /> : index % 4 === 2 ? <WorkIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='menuburger'>
      <Button onClick={toggleDrawer(true)}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
