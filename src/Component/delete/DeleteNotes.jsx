import {styled} from '@mui/material/styles'
import {Box,Grid} from '@mui/material'
import { useContext } from 'react';


// import Component
import { DataContext } from '../../context Data/NoteData';

import DeleteNote from './DeleteNote'

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

const DeleteNotes=()=>{
  const {trash}=useContext(DataContext);
    return(
  <>
  <Box sx={{display:'flex',width:'100%'}}>
    <Box sx={{p:3,width:'100%'}}>
        <DrawerHeader/>
       {/* <Form/> */}
       <Grid container style={{marginTop:16}}>  
       {
        trash.map(note=>(
        <Grid item>
           <DeleteNote note ={note}/>
           </Grid>
          
        ))
       }
      </Grid>

    </Box>
  </Box>
  </>
    )

}

export default DeleteNotes;