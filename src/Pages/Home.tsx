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
    addressTask : string
}

export default function Home() 
{
     const[newTask , setNewTask] = useState<tasks>({} as tasks)
     const[taskAdded , setTaskAdded] = useState<boolean>(false)
     let newTasksData : tasks[] = TasksData;

     console.log(taskAdded)
     //localStorage.removeItem('allTasks')
     if(localStorage.getItem('allTasks'))
     {
        newTasksData = [];
        newTasksData =  JSON.parse( localStorage.getItem('allTasks') || '[]');
     }
     const handleChange = () =>
       {
        
       }

     const handleNewTask = (e : React.ChangeEvent<HTMLInputElement>) => 
       {
          e.preventDefault()
          const obj = 
          {
            idTask : TasksData.length ,
            addressTask : e.target.value
          }
           setNewTask(obj)
       }
     
     const handleSubmit = () =>
        {
           newTasksData.push(newTask)
           localStorage.setItem('allTasks' , JSON.stringify(newTasksData))
           setTaskAdded(prev => !prev)
        }  
     console.log(newTasksData)  
     console.log(JSON.parse(localStorage.getItem('allTasks') || '[]'))



      const ArrayOfTasks : tasks[] = newTasksData ;  
      const showTasks  = ArrayOfTasks.map((item: tasks) => {
          return( <Tasks 
             addressTask={item.addressTask}
             idTask={item.idTask}
           />)
       })

       console.log(showTasks)
       console.log(ArrayOfTasks)


    return(
        <>
        <Container maxWidth="md" className='container'>
            <Card className='card'>
                <CardContent>
                     <Typography className='text' style={{textAlign: 'center' , fontSize: '40px' , fontWeight:'bold' , color:'black'}}>مهامي</Typography>
                     <div className='buttonContainer' style={{direction: 'rtl',display:'flex',justifyContent:'center',alignItems:'center'}}  onChange={handleChange}>
                        <Button style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">الكل</Button>
                        <Button style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">منجز</Button>
                        <Button style={{border: '0.5px solid gray' , fontSize:'17px' , fontWeight:'bold' , borderRadius:'12px'}} variant="outlined">غير منجز</Button>
                     </div>
                     <Stack direction='column' style={{display:'flex',flexDirection:'column',gap:'30px' , marginTop:'30px'}}>
                          {showTasks}
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