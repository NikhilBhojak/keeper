
import { createContext, useState } from "react"

export const DataContext=createContext(null);

const NoteData=({children})=>{
     const[notes,setnotes]=useState([]);
     const[archive,setarchive]=useState([]);
     const[trash,settrash]=useState([]);
    return(
        <>
            <DataContext.Provider value={{
                notes,setnotes,
                archive,setarchive,
                trash,settrash
            }}>
            {children}
            </DataContext.Provider>
        </>
    )
}
export default NoteData;