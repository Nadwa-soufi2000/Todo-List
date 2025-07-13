import Button  from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
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
     const[newTask , setNewTask] = useState<boolean>(false)

     if(localStorage.getItem('allTasks'))
     {
        TasksData.push(JSON.parse( localStorage.getItem('allTasks') || '[]'))
     }
     const handleChange = () =>
       {
        
       }

     const handleNewTask = (e : React.ChangeEvent<HTMLInputElement>) => 
       {
          const obj = 
          {
            idTask : TasksData.length ,
            addressTask : e.target.value
          }
           TasksData.push(obj)
           localStorage.setItem('allTasks' , JSON.stringify(TasksData))
       }
     
     const handleSubmit = () =>
        {
            setNewTask(true)
        }  


     console.log(newTask)
     const ArrayOfTasks : tasks[] = TasksData;

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
                     <ButtonGroup className='buttonContainer' style={{direction: 'rtl',display:'flex',justifyContent:'center',alignItems:'center'}} value='' onChange={handleChange}>
                        <Button variant="outlined">الكل</Button>
                        <Button variant="outlined">منجز</Button>
                        <Button variant="outlined">غير منجز</Button>
                     </ButtonGroup>
                     <Stack direction='column' style={{display:'flex',flexDirection:'column',gap:'30px'}}>
                          {showTasks}
                     </Stack>
                </CardContent>
                <CardActions>
                    <Button onSubmit={handleSubmit}>إضافة</Button>
                    <TextField id="outlined-basic" onChange={handleNewTask} label=" عنوان المهمة" variant="outlined" />
                </CardActions>
            </Card>
        </Container>
        </>
    )
    
}