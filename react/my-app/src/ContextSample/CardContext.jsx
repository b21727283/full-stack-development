import { createContext, useState } from "react";


// öncelikle boş bir context oluştrduk
export const CardContext = createContext(null);

// sarmanlayıcı
export const CardProvider = ({children}) => {


    // global state

    const[card, setcard] =useState([]);


    return <CardContext.Provider value={{card, setcard}}>{children}</CardContext.Provider>


}