import { createContext, useState } from "react";

type array = {
   idTask : number ,
   addressTask : string
}[]

type taskType = {
   tasks : array,
   setTask : React.Dispatch<React.SetStateAction<array>>
}

type childrenType = {
    children : React.ReactNode
}

export const Completed = createContext({} as taskType)

export default function FinishedTasks ({children} : childrenType) : React.ReactNode
{
    const[tasks , setTask ] = useState<array>([])

    return(
    <Completed.Provider value={{tasks , setTask}}>{children}</Completed.Provider>
    )
}