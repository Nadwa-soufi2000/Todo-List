import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import '../Components/Style.css'
import { Completed } from './Todos';
import { Stack, TextField, Typography } from '@mui/material';

type taskType = {
    idTask : number,
    addressTask : string,
    isCompleted: boolean,
 }

type ModalProps = {
    open : boolean ,
    setOpen : React.Dispatch<React.SetStateAction<boolean>>,
    element : taskType,
    operation : string
}


export default function ModalComponent(props : ModalProps)
{

  const { tasks , setTask } = React.useContext(Completed)
  const[changedTask , setChangedTask] = React.useState<string>('')
  const arrTasks = JSON.parse(localStorage.getItem('todos') || '[]')
 

  React.useEffect(() =>{
     setChangedTask(props.element.addressTask)
  }, [])

  const handleClose = () => {
    props.setOpen(false)
  };



  const handleDelete = (obj : taskType) =>
  {
     arrTasks.forEach((element : taskType) => {
       if(element.idTask === obj.idTask)
       {
         const newTasks = arrTasks.filter((item : taskType) => item !== element)
         localStorage.setItem('todos' , JSON.stringify(newTasks))
         localStorage.setItem('deleted' , 'done')
         setTask(newTasks)
       }
     });
  } 
     console.log(tasks)
     if(localStorage.getItem('deleted') === 'done')
     {
        window.location.pathname = '/'
     }

  const handleUpdate = (e : React.ChangeEvent<HTMLInputElement>) =>
  {
      setChangedTask(e.target.value)
  }
 
  const updateTask = (obj : taskType) =>
  {
    arrTasks.forEach((element : taskType) => {
       if(element.idTask === obj.idTask)
       {
         element.addressTask = changedTask;
       }
     });
     localStorage.setItem('todos' , JSON.stringify(arrTasks))
     window.location.pathname = '/'
  }
 // const handleListItemClick = (value: string) => {
    
 // };

  return (
    <Dialog 
       open={props.open} 
       onClose={handleClose}
    >
      <DialogTitle style={{fontSize:'17px', textAlign:'center', fontWeight:'bold'}}>
        { props.operation === 'delete' ?
       " هل انت متأكد من حذف هذه المهمة ؟"
        :
        ' :تعدبل المهمة'
        }
      </DialogTitle>
       { props.operation === 'delete' ?
        <ButtonGroup className='buttonContainer'>    
               <Button onClick={() => handleDelete(props.element)} variant="outlined" style={{color:'red',border:'1px solid gray',borderRadius:'5px'}}>حذف</Button>
               <Button variant="outlined" onClick={handleClose} style={{color:'green',border:'1px solid gray',borderRadius:'5px'}}>تراجع</Button>
        </ButtonGroup>
        :
        <Stack direction='column' style={{display:'flex', justifyContent:'end', alignItems:'center', padding: '20px'}}>
            <Typography className='text' style={{textAlign: 'start' , fontSize: '17px' , fontWeight:'bold' , color:'black'}}>عنوان المهمة</Typography>
            <TextField  className='inp' value={changedTask} onChange={handleUpdate} id="outlined-basic" variant="outlined"/>
            <Stack>
               <Button onClick={() => updateTask(props.element)} variant="outlined" style={{color:'green',border:'1px solid gray',borderRadius:'5px' , width:'100px'}}>تعديل</Button>
            </Stack>
        </Stack>
       }
    </Dialog>
  );
}
