import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Stack } from '@mui/material'
import '../Components/Style.css'
import ModalComponent from './ModalComponent';
import { useState } from 'react';


 type TaskData = {
    addressTask : string
 }

export default function Tasks(props : TaskData) 
{
    const[open , setOpen] = useState<boolean>(false)

    const handleModal = () => 
    {
        setOpen(true)
    }
    return(
        <>
        {
            open &&
            <ModalComponent
               open={open}
               setOpen={setOpen}
            />
        }
        <Container className='taskContainer'>
            <Stack direction='row' style={{display:'flex', gap:'10px'}}>
              <IconButton>
                <EditIcon id='edit' className='icon'/>
              </IconButton> 
              <IconButton onClick={handleModal}>
                  <DeleteIcon id='delete' className='icon'/>
              </IconButton> 
              <IconButton>
                  <CheckIcon id='check' className='icon'/>
              </IconButton>
            </Stack>
            <Typography style={{color:'white', fontSize:'27px'}}>{props.addressTask}</Typography>
        </Container>
        </>
    )
}