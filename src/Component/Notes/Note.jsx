//  this is for  note that contain heading and description
import { useContext } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import { ArchiveOutlined as Archive,DeleteOutlineOutlined as Delete } from "@mui/icons-material";
import { DataContext } from "../../context Data/NoteData";


const StyledCard = styled(Card)`
    width:240px;
    display:flex;
    flex-wrap:wrap;
    margin:8px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:8px;
`;

const Note=({note})=>{
    const{notes,setnotes,setarchive,settrash}=useContext(DataContext);

    const archivenote=(note)=>{
        const updateNotes=notes.filter(data=>data.id!=note.id);
        setnotes(updateNotes);
        setarchive(prevarr=>[note,...prevarr]);
    }
    const deletenote=()=>{
        const updateNotes=notes.filter(data=>data.id!=note.id);
        setnotes(updateNotes);
        settrash(prevarr=>[note,...prevarr]);
    }
    return(
        <>
           <StyledCard>
              <CardContent>
              <Typography>{note.heading}</Typography>
              <Typography>{note.text}</Typography>
                <CardActions>
                    <Archive
                        fontSize="small"
                style={{marginLeft:'140'} }  
                onClick={()=>archivenote(note)}
                    />
                    <Delete
                        fontSize="small"
                    //   style={{marginLeft:'auto'} } 
                onClick={()=>deletenote(note)}
                    />
                </CardActions>
              </CardContent>
           </StyledCard>
        </>
    )
}
 export default Note;