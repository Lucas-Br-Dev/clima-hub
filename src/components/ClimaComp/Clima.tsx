"use client"

import { useContext } from "react"
import { ClimaShow } from "./ClimaShow"
import { BotomTheme } from "@/UI/ButtonTheme"
import { ThemeContext } from "@/context/ThemeContext"

export const Clima = () => {

    const { Theme } = useContext(ThemeContext)

    return (
        <div className="h-full mx-auto flex flex-col items-center" >
            <div className={`${!Theme ? "bg-gray-100 text-black" : "bg-gray-800 text-white"} flex justify-between items-center  w-full p-4 border-b-3 border-black shadow shadow-black`} >
                <h1 className="text-2xl md:text-4xl" >ClimaHub</h1>
                <BotomTheme />
            </div>
            <div className="mt-4 h-full" >
                <ClimaShow />
            </div>
        </div>
    )
}