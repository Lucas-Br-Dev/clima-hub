"use client"

import { Clima } from "../components/ClimaComp/Clima"
import { useState } from "react"

const Page = () => {

  
  const [themeDark, setThemeDark] = useState(false)
  const switchTheme = () => { setThemeDark(!themeDark) }

  return( 
    <div className={`min-h-dvh bg-linear-to-r ${!themeDark ? "from-lime-700 to-lime-400" : "from-gray-700 to-gray-500"} `} >
      <Clima themeDark={themeDark} switchTheme={switchTheme} />
    </div>
  )
}

export default Page