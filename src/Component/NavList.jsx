import * as React from 'react';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DeleteOutlineOutlinedIcon  from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon  from '@mui/icons-material/ArchiveOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {Link} from 'react-router-dom';


const NavList=()=>{

    const navList=[
        {id:1,name:'Notes',route: '/',icon:<LightbulbOutlinedIcon/>},
        {id:2,name:'Archive', route:'/archive',icon:<ArchiveOutlinedIcon />},
        {id:3,name:'Trash',route: '/delete',icon:<DeleteOutlineOutlinedIcon/>}
    ]
    return(
        <List>
        {navList.map((navList) => (

          <ListItem key={navList.id}>
          <Link to={navList.route} style={{textDecoration:'none',display:"flex",color:'inherit',alignItems:'center' }}>
              <ListItemIcon>
                {navList.icon}
              </ListItemIcon>
              <ListItemText primary={navList.name} />
            
          </Link> 
          </ListItem>
        ))}
      </List>
    )
}
export default NavList;