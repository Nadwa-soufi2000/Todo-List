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
import { TasksData } from '../Components/TasksData'
import Tasks from '../Components/Tasks'
import { useState } from 'react'

type tasks = {
    idTask : number ,
    addressTask : string,
    isCompleted: boolean
}

export default function Home() 
{
     const[newTask , setNewTask] = useState<tasks>({} as tasks)
     const[todos , setTodos] = useState<tasks[]>(TasksData)

     const handleChangeTodos = (id : number) =>
     {
      const todo: tasks[] = todos.filter((item) => item.idTask === id )
      todo[0].isCompleted = !todo[0].isCompleted
      console.log(todo)
      console.log(id)
     }
     const handleChange = () =>
       {
        
       }

     const handleNewTask = (e : React.ChangeEvent<HTMLInputElement>) => 
       {
          e.preventDefault()
          const obj = 
          {
            idTask : TasksData.length + 1 ,
            addressTask : e.target.value,
            isCompleted: false
          }
           setNewTask(obj)
       }
     
     const handleSubmit = () =>
        {
           setTodos([...todos , newTask])
        }  
    


      const showAllTasks  = todos.map((item: tasks) => {
          return( <Tasks 
             addressTask={item.addressTask}
             idTask={item.idTask}
             isCompleted={item.isCompleted}
             handleChangeTodo = {handleChangeTodos}
           />)
       })



    return(
        <>
        <Container maxWidth="md" className='container'>
            <Card className='card'>
                <CardContent>
                     <Typography className='text' style={{textAlign: 'center' , fontSize: '40px' , fontWeight:'bold' , color:'black'}}>مهامي</Typography>
                     <div className='buttonContainer' style={{direction: 'rtl',display:'flex',justifyContent:'center',alignItems:'center'}}  onChange={handleChange}>
                        <Button  style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">الكل</Button>
                        <Button  style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">منجز</Button>
                        <Button style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">غير منجز</Button>
                     </div>
                     <Stack direction='column' style={{display:'flex',flexDirection:'column',gap:'30px' , marginTop:'30px'}}>
                          {showAllTasks}
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