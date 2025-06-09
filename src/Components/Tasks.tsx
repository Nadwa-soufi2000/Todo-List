import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Stack } from '@mui/material'
import '../Components/Style.css'


 type TaskData = {
    addressTask : string
 }

export default function Tasks(props : TaskData) 
{
    return(
        <Container className='taskContainer'>
            <Stack direction='row' style={{display:'flex', gap:'10px'}}>
              <IconButton>
                <EditIcon className='icon'/>
              </IconButton> 
              <IconButton>
                  <DeleteIcon className='icon'/>
              </IconButton> 
              <IconButton>
                  <CheckIcon className='icon'/>
              </IconButton>
            </Stack>
            <Typography style={{color:'white', fontSize:'27px'}}>{props.addressTask}</Typography>
        </Container>
    )
}