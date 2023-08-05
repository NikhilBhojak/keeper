import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// component import
import SwipeDrawer from './SwipeDrawer'
import Notes from './Notes/Notes'
import {Box} from '@mui/material'
import Archives from './archive/Archives'
import DeleteNotes from './delete/DeleteNotes'
const Home = () => {
  return (
<>
<Box style={{display:'flex',flexdirection:'row' ,width:'100%'}}>
<Router>
    <SwipeDrawer/>
    <Routes>
    <Route path='/' element={<Notes/>}/>
    <Route path='/archive' element={<Archives/>}/>
    <Route path='/delete' element={<DeleteNotes/>}/>

    </Routes>

</Router>
</Box>
</>
  )
}

export default Home