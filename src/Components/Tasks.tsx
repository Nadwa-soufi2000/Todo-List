import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Stack } from '@mui/material'
import '../Components/Style.css'
import ModalComponent from './ModalComponent';
import Todos from './Todos.tsx'
import { useContext, useRef, useState } from 'react';
import { Completed } from './Todos';


 type taskType = {
    idTask : number,
    addressTask : string,
    isCompleted: boolean
 }
 


export default function Tasks(props : taskType) 
{
    const[open , setOpen] = useState<boolean>(false)
    const obj = useRef<taskType>({} as taskType)
    const opration = useRef<string>('')


    console.log(obj.current)

    const{ tasks , setTask } = useContext(Completed)
     let updateTodos : taskType[] = tasks;

    if(localStorage.getItem('todos'))
    {
       updateTodos = JSON.parse(localStorage.getItem('todos') || '[]')
       console.log(updateTodos)
    }
    
    const handleModal = (id : number , oper : string) => 
    {
      updateTodos.forEach(element => {
             if(element.idTask === id)
             {
                obj.current = element
             }
        });

        opration.current = oper;
        console.log(obj.current)
        setOpen(true)
    }
    const handleChange = (id : number) => 
      {
        updateTodos.forEach(element => {
             if(element.idTask === id)
             {
                element.isCompleted = !element.isCompleted;
             }
        });
        //updateTodos = tasks;
        localStorage.setItem('todos' , JSON.stringify(updateTodos))
        setTask(updateTodos)
      }
    
  
    return(
        <>
        {
            open &&
           <Todos>
            <ModalComponent
               open={open}
               setOpen={setOpen}
               element={obj.current}
               operation={opration.current}
            />
            </Todos>
        }
        <Container className='taskContainer'>
            <Stack className='stack' direction='row' style={{display:'flex'}}>
              <IconButton id={`edit${props.idTask}`} onClick={() =>  handleModal(props.idTask , 'update')}>
                <EditIcon id='edit' className='icon'/>
              </IconButton> 
              <IconButton id={`delete${props.idTask}`} onClick={() => handleModal(props.idTask , 'delete')}>
                  <DeleteIcon id='delete' className='icon'/>
              </IconButton> 
              <IconButton id={`check${props.idTask}`} onClick={() => handleChange(props.idTask)}>
                  <CheckIcon  className='icon' style={{ color: props.isCompleted ?  'white' : 'green' , backgroundColor: props.isCompleted ? 'green' : 'white'}}/>
              </IconButton>
              <div id='t'></div>
            </Stack>
            <Typography className='todoAddress' style={{color:'white', fontSize:'20px'}}>{props.addressTask}</Typography>
        </Container>
        </>
    )
}