import { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-toastify";



const  contextProvider  = createContext()
function ContextP({children}) {
  const [page, setPage] = useState(1);
  


  
    

         
    return (
      <contextProvider.Provider
        value={{
          page,
          setPage,
        }}
      >
        {children}
      </contextProvider.Provider>
    );
}

export default ContextP
export function UseData (){
    const context = useContext(contextProvider)
    if(context === undefined ) throw new Error("the context is wrong ")
    return context
 
}

