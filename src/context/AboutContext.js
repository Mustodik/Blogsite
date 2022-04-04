import {createContext} from "react"

export const AboutContext = createContext();

function AboutContextProvider({children}){
    const about= {
        name:"Ibrahim Musodiq",
        hobbies:["Music","Movies", "Sport"],
        bio: "I am a passionate young man who desire community growth"


    }
    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    )
}

export default AboutContextProvider