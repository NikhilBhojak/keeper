import React from 'react'
// Component
import Home from './Component/Home'
import NoteData from './context Data/NoteData'
const App = () => {
  return (
   <NoteData>
      <Home/>
   </NoteData>
  )
}

export default App