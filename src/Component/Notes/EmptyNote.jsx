

import { LightbulbOutlined as LightBlulb } from "@mui/icons-material";
import { Box, Typography } from "@mui/material"; 
import {styled} from '@mui/material/styles'
 
const Light=styled(LightBlulb)`
    font-size:120px;
    color:#F5F5F5;

`;
const Text=styled(Typography)`
color:#80868b;
font-size:22px;
`;
const Conatiner =styled(Box)`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:20vh;

`;

const EmptyNote=()=>{
    return(
        <>
            <Conatiner>
                <Light/>
                <Text>
                    Notes!!!... you add appear here
                </Text>
            </Conatiner>
        </>
    )
}

export default EmptyNote;