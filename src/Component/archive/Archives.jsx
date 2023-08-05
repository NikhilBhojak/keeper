import {styled} from '@mui/material/styles'
import {Box, Grid} from '@mui/material'
import { useContext } from 'react';


// import Component
import { DataContext } from '../../context Data/NoteData';
import  Archive  from './Archive'





const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));
const Archives=()=>{
  const {archive}=useContext(DataContext);
    return(
  <>
  <Box sx={{display:'flex',width:'100%'}}>
    <Box sx={{p:3,width:'100%'}}>
        <DrawerHeader/>
       {/* <Form/> */}
       <Grid container style={{marginTop:16}}>    
    {
        archive.map(archiv=>(
          <Grid item>
           <Archive note={archiv}/> 
          </Grid>
        ))
    }
    </Grid>
    </Box>
  </Box>
  </>
    )

}

export default Archives;