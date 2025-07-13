"use client"

import { ThemeContext, } from "@/context/ThemeContext"
import { Clima } from "../components/ClimaComp/Clima"
import { useState } from "react"

const Page = () => {

  const [Theme, setTheme] = useState(false)
  const switchTheme = () => {setTheme(!Theme)}

  return (
    <ThemeContext.Provider value={{Theme, switchTheme}}>
      <div className={`min-h-dvh bg-linear-to-r ${!Theme ? "from-gray-300 to-gray-200" : "from-gray-800 to-gray-950"} `} >
        <Clima />
      </div>
    </ThemeContext.Provider>
  )
}

export default Page