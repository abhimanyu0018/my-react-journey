import {createContext} from 'react'
import { useState } from 'react'

export const counterContext = createContext(null)

export const CounterContextProvider = (props) => {

    const [count,setCount] = useState(0)


      
    return (
        <counterContext.Provider value={{count,setCount}} >
            {props.children}
        </counterContext.Provider>

    )

}