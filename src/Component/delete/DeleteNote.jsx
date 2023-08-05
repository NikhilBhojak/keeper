//  this is for  note that contain heading and description
import { useContext } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import { RestoreFromTrashOutlined as Restore,DeleteForever as Delete } from "@mui/icons-material";
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

const DeleteNote=({note})=>{
    const{notes,setnotes,setarchive,trash,settrash}=useContext(DataContext);

    const Restorenote=(note)=>{
        let updateNotes=trash.filter(data=>data.id!=note.id);
        settrash(updateNotes);
        setnotes(prevarr=>[...prevarr,note]);
    }
    const deletenote=()=>{
        let updateNotes=trash.filter(data=>data.id!=note.id);
        settrash(updateNotes);
        // settrash(prevarr=>[...prevarr,note]);
    }
    return(
        <>
           <StyledCard>
              <CardContent>
              <Typography>{note.heading}</Typography>
              <Typography>{note.text}</Typography>
                <CardActions>
                    <Delete
                        fontSize="small"
                      style={{marginLeft:'140'} } 
                onClick={()=>deletenote(note)}
                    />
                    <Restore
                        fontSize="small"
                // style={{margin:'auto'} }  
                onClick={()=>Restorenote(note)}
                    />
                </CardActions>
              </CardContent>
           </StyledCard>
        </>
    )
}
 export default DeleteNote;