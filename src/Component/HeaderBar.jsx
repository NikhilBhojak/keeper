import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


const Header = styled(AppBar)`
z-index:1201;
background:#fff;
box-shadow:inset 0 -1px 0 0 #dadce0;
`;
 const Heading= styled(Typography)`
 color:#5F6368;
 font-size:24px;
 margin-left:25px;
 `;
const HeaderBar=({open,handleDrawer})=>{
const logo='https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
    return(
        <Header open={open}>
        <Toolbar>
          <IconButton
            
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: "36px",
            
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" style={{width:30 }}/>
          <Heading>
              Keep
          </Heading>
        </Toolbar>
      </Header>
    )
}
export default HeaderBar;