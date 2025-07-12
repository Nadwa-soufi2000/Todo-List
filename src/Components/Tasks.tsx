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
import {TasksData} from './TasksData'


 type TaskData = {
    idTask : number,
    addressTask : string
 }
 


export default function Tasks(props : TaskData) 
{
    const[open , setOpen] = useState<boolean>(false)
    const arrCompletedTasks : TaskData[]  = [];

    //localStorage.clear();
    if(localStorage.getItem('task'))
    {
      arrCompletedTasks.push(JSON.parse(localStorage.getItem('task') || '[]'))
      console.log(arrCompletedTasks)
    }
   
  
    const handleModal = () => 
    {
        setOpen(true)
    }
    const handleChange = (idTask : string) => 
      {
         
          localStorage.setItem('changed' , idTask )

          TasksData.forEach(element => 
            {
                
             if(props.addressTask === element.addressTask)
                {
                  arrCompletedTasks.push(element)
                  localStorage.setItem('task' , JSON.stringify(arrCompletedTasks))
                }
            });
          
          console.log(TasksData)
          const re : TaskData[] = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task') || '[]') : []
          console.log(re)
          console.log(arrCompletedTasks)
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
              <IconButton id={`edit${props.idTask}`}>
                <EditIcon id='edit' className='icon'/>
              </IconButton> 
              <IconButton id={`delete${props.idTask}`} onClick={handleModal}>
                  <DeleteIcon id='delete' className='icon'/>
              </IconButton> 
              <IconButton id={`check${props.idTask}`} onClick={() => handleChange(`${props.idTask}`)}>
                  <CheckIcon id='check' className='icon' style={{ color: localStorage.getItem('changed') === `${props.idTask}` ? 'white' : 'green' , backgroundColor: localStorage.getItem('changed') === `${props.idTask}` ? 'green' : 'white' }}/>
              </IconButton>
              <div id='t'></div>
            </Stack>
            <Typography style={{color:'white', fontSize:'27px'}}>{props.addressTask}</Typography>
        </Container>
        </>
    )
}