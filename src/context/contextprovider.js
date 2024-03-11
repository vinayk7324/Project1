import { createContext, useContext } from "react";

export const context = createContext({
    mode:"light",
    ThemeHandler:()=>{},

})

export const Provider  = context.Provider
export default function useTheme(){
    return  useContext(context)
}