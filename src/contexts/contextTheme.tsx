"use client"
import { createContext,useState,useEffect } from "react"

interface TypeTheme {
    theme: "dark" | "light"
    setTheme: (theme: "dark" | "light") => void
}

export const ContextTheme = createContext<TypeTheme>({
    theme: "dark",
    setTheme: (theme: string) => {
        return void 0;
    }
})

export function ProviderTheme(props:any) {
    const [theme,setTheme] = useState<"dark" | "light">("dark")
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        htmlElement.classList.toggle('dark');
    },[theme])
    return (
        <ContextTheme.Provider value={{theme,setTheme,}}>
            {props.children}
        </ContextTheme.Provider>
    )
}