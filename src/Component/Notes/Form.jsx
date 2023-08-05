import {useState,useRef, useContext} from 'react'
import {TextField,Box,ClickAwayListener} from '@mui/material'
import {styled} from '@mui/material/styles'
import { DataContext } from '../../context Data/NoteData';
import{v4 as uuid} from 'uuid';

const Container=styled(Box)`
display:flex;
flex-direction:column;
width:600px;
box-shadow:0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
padding: 10px 15px;
border-radius:8px;
border-color:#e0e0e0;
${'' /* justify-content:center; */}
margin:auto;
min-height:30px;
`;

const note={
    id:'',
    heading:'',
    text:''
}

const Form=()=>{
    const[showTextfield,setshowTextfield]=useState(false);
    const [addNote,setaddNote]=useState({...note,id:uuid()});
    const {notes,setnotes}=useContext(DataContext);
    
    // this context is use for add the note means in notes we store all the note

    const containerRef=useRef();


    const onTextareaclick=()=>{
        setshowTextfield(true) ;
        containerRef.current.style.minHeight='70px';
        // .current provide the current component of dom an d through this we have all access for it and do anything we want

    }

    const handleClickaway=()=>{
        setshowTextfield(false); 
        containerRef.current.style.minHeight='30px';
        setaddNote({...note,id:uuid()});
        // kyuki hm chte ki jb bhi bhr click kre to add note me  jo value/note hop notes me chla jaye
        if(addNote.heading||addNote.text){

          setnotes(prevarr=>[addNote,...prevarr]);
        }
      console.log(notes);
    }
    const onTextChange=(event)=>{
      //  console.log( event.target.name,event.target.value)
      let changeNote= {...addNote,[event.target.name]:event.target.value};
      setaddNote(changeNote);
    }
 return(
    <>
    <ClickAwayListener onClickAway={handleClickaway}>

      <Container ref={containerRef}>
      {showTextfield &&
      
        <TextField
            placeholder='title'
            variant='standard'
            // inputProps have disable underline property thaty remove the below underline
            InputProps={{disableUnderline: true}}
            style={{marginBottom:10}}
            name='heading'
            value={addNote.heading}
            onChange={(event)=>onTextChange(event)}
        />
      }
        <TextField
            placeholder='take a note...'
            // this is palce where we write the note that will be in multiline so we enable the multiline property
            multiline
            maxRows={Infinity}
            varient='Standard'
            onClick={onTextareaclick}
            name='text'
            onChange={(event)=>onTextChange(event)}
            value={addNote.text}
        />

      </Container>
    </ClickAwayListener>
    </>
 )    
}

export default Form
