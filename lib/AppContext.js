import { createContext } from "react"


export const App = createContext()

const ContextWrapper = ({children,states})=>{
    return(
        <App.Provider value={states}>
            {children}
        </App.Provider> 
    )
}

export default ContextWrapper;