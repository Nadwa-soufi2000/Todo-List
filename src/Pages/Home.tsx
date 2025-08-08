import Button  from '@mui/material/Button'
//import ButtonGroup from '@mui/material/ButtonGroup'
import Card from '@mui/material/Card'
import CardContent  from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/material'
import '../Components/Style.css'
//import { TasksData } from '../Components/TasksData'
import Tasks from '../Components/Tasks'
import { useContext , useRef, useState } from 'react'
import { Completed } from '../Components/Todos'

type tasksType = {
    idTask : number ,
    addressTask : string,
    isCompleted: boolean
}

export default function Home() 
{
     const[newTask , setNewTask] = useState<tasksType>({} as tasksType)
     const{ tasks , setTask } = useContext(Completed)

     const show = useRef<string>('')
      
     localStorage.setItem('deleted' , '!done')
     let arrTodos: tasksType[] = tasks;

     if(localStorage.getItem('todos'))
     {
        arrTodos = JSON.parse(localStorage.getItem('todos') || '[]')
     }
      
     const handleChange = () =>
       {
        
       }

     const handleNewTask = (e : React.ChangeEvent<HTMLInputElement>) => 
       {
          e.preventDefault()
          const obj = 
          {
            idTask : tasks.length + 1 ,
            addressTask : e.target.value,
            isCompleted: false
          }
           setNewTask(obj)
       }
     
     const handleSubmit = () =>
        {
          arrTodos.push(newTask)
          localStorage.setItem('todos' , JSON.stringify(arrTodos))
          setTask([...tasks , newTask])   
        }  


     const handleAllTasks = () =>
        {
           show.current = 'All'
        } 


     const handleCompletedTasks = () =>
     {
       show.current = 'Completed'
     }

     const handleUnCompletedTasks = () =>
     {
      show.current = 'UnCompleted'
     }

      const showAllTasks  = arrTodos.map((item: tasksType) => {
          return( <Tasks 
             addressTask={item.addressTask}
             idTask={item.idTask}
             isCompleted={item.isCompleted}
           />)
       })
     //const showCompletedTasks = arrTodos.filter(item => item.isCompleted === true)
     //const showUnCompletedTasks = arrTodos.filter(item => item.isCompleted === false)

    return(
        <>
        <Container maxWidth="md" className='container'>
            <Card className='card'>
                <CardContent>
                     <Typography className='text' style={{textAlign: 'center' , fontSize: '40px' , fontWeight:'bold' , color:'black'}}>مهامي</Typography>
                     <div className='buttonContainer' style={{direction: 'rtl',display:'flex',justifyContent:'center',alignItems:'center'}}  onChange={handleChange}>
                        <Button onClick={handleAllTasks} style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">الكل</Button>
                        <Button onClick={handleCompletedTasks} style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">منجز</Button>
                        <Button onClick={handleUnCompletedTasks} style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">غير منجز</Button>
                     </div>
                     <Stack direction='column' style={{display:'flex',flexDirection:'column',gap:'30px' , marginTop:'30px'}}>
                          {
                            showAllTasks
                          }
                     </Stack>
                </CardContent>
                <CardActions>
                    <Button onClick={handleSubmit}>إضافة</Button>
                    <TextField id="outlined-basic" onChange={handleNewTask} label=" عنوان المهمة" variant="outlined" />
                </CardActions>
            </Card>
        </Container>
        </>
    )
    
}