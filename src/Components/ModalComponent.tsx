import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import '../Components/Style.css'
import { Completed } from './Todos';

type taskType = {
    idTask : number,
    addressTask : string,
    isCompleted: boolean
 }

type ModalProps = {
    open : boolean ,
    setOpen : React.Dispatch<React.SetStateAction<boolean>>,
    element : taskType,
}
export default function ModalComponent(props : ModalProps)
{

  const { tasks , setTask } = React.useContext(Completed)
  const arrTasks = JSON.parse(localStorage.getItem('todos') || '[]')


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

 // const handleListItemClick = (value: string) => {
    
 // };

  return (
    <Dialog open={props.open}>
      <DialogTitle style={{fontSize:'17px', textAlign:'center', fontWeight:'bold'}}>هل انت متأكد من حذف هذه المهمة ؟</DialogTitle>
        <ButtonGroup className='buttonContainer'>
            <Button onClick={() => handleDelete(props.element)} variant="outlined" style={{color:'red',border:'1px solid gray',borderRadius:'5px'}}>حذف</Button>
            <Button variant="outlined" onClick={handleClose} style={{color:'green',border:'1px solid gray',borderRadius:'5px'}}>تراجع</Button>
        </ButtonGroup>
    </Dialog>
  );
}
