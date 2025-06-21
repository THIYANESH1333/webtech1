import{createContext} from "react"
export const InfoContext=createContext()

export const InfoProvider=({children})=>{
    const info={name:'ram',age:40,dep:'msc'}
    return(
        <InfoContext.Provider value={info}>
            {children}
        </InfoContext.Provider>
    )
}