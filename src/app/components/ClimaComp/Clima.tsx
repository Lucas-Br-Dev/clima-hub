"use client"

import { useState } from "react"
import { ClimaShow } from "./ClimaShow"
import { BotomTheme } from "../../../UI/ButtonTheme"

type Props = {
    themeDark: boolean;
    switchTheme: () => void
}

export const Clima = ({themeDark ,switchTheme}: Props) => {


    return (
        <div className="h-full container mx-auto flex flex-col items-center" >
            <div className={`${!themeDark ? "bg-lime-200 text-black" : "bg-gray-800 text-white"} flex justify-between items-center  w-full p-4 border-b-3 border-black rounded-b-lg shadow shadow-black`} >
                <h1 className="text-2xl md:text-4xl" >ClimaHub</h1>
                <BotomTheme onClickBTN={switchTheme} themeActual={themeDark} />
            </div>
            <div className="mt-4 h-full" >
                <ClimaShow themeActual={themeDark} />
            </div>
        </div>
    )
}