import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

export const BotomTheme = () => {

    const { Theme, switchTheme } = useContext(ThemeContext)

    return (
        <div onClick={switchTheme} className={` ${Theme ? "bg-gray-950" : "bg-gray-300 "} w-20 h-8.5 rounded-full flex items-center border border-black hover:cursor-pointer transition-colors duration-400`} >

            <div className={`${!Theme ? "bg-gray-950 text-white  translate-x-0" : "bg-gray-400 text-black translate-x-11.5"} w-8 h-8 rounded-full  flex items-center justify-center transition-all duration-500 ease-in-out`} >
                {!Theme ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                }
            </div>
        </div>
    )
}