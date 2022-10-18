import { createContext, useState } from "react";


export const IsLoggedContext = createContext(null);


export const IsLoggedProvider = ({children}) => {


    const[isLogged, setIsLogged] =useState(false);


    return <IsLoggedContext.Provider value={{isLogged, setIsLogged}}>{children}</IsLoggedContext.Provider>


}