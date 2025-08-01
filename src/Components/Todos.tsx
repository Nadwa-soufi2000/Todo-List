import { createContext, useState } from "react";

 const TasksData = [
    {
       idTask : 1 ,
       addressTask : "قراءة ثلاث كتب",
       isCompleted : false
    }
    ,
    {
       idTask : 2 ,
       addressTask : " في الجافاسكريبت async , await فهم تفاصيل",
       isCompleted : false
    }
    ,
    {
       idTask : 3 ,
       addressTask : "إنجاز مشروع قائمة المهام",
       isCompleted : false
    }
    ,
    {
      idTask : 4 ,
      addressTask : "في الجافاسكريبت axios دراسة مكتبة",
      isCompleted : false
    }
    ,
    {
      idTask : 5 ,
      addressTask : "الانتهاء من كورس جافاسكريبت",
      isCompleted : false
    }
]

type array = {
   idTask : number ,
   addressTask : string ,
   isCompleted : boolean
}[]

type taskType = {
   tasks : array,
   setTask : React.Dispatch<React.SetStateAction<array>>
}

type childrenType = {
    children : React.ReactNode
}

export const Completed = createContext({} as taskType)

export default function Todos ({children} : childrenType) : React.ReactNode
{
    const[tasks , setTask ] = useState<array>(TasksData)

    return(
    <Completed.Provider value={{tasks , setTask}}>{children}</Completed.Provider>
    )
}