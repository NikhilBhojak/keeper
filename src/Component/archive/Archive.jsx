//  this is for  note that contain heading and description
import { useContext } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import { ArchiveOutlined as UnArchive,DeleteOutlineOutlined as Delete } from "@mui/icons-material";
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

const Archive=({note})=>{
    const{notes,archive,setnotes,setarchive,settrash}=useContext(DataContext);

    const Unarchivenote=(note)=>{
        const updateNotes=archive.filter(data=>data.id!=note.id);
        setarchive(updateNotes);
        setnotes(prevarr=>[...prevarr,note]);
    }
    const deletenote=()=>{
        const updateNotes=archive.filter(data=>data.id!=note.id);
        setarchive(updateNotes);
        settrash(prevarr=>[...prevarr,note]);
    }
    return(
        <>
           <StyledCard>
              <CardContent>
              <Typography>{note.heading}</Typography>
              <Typography>{note.text}</Typography>
                <CardActions>
                    <UnArchive
                        fontSize="small"
                style={{marginLeft:'140'} }  
                onClick={()=>Unarchivenote(note)}
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
 export default Archive;