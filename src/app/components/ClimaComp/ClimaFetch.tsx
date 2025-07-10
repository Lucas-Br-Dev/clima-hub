"use client"

type Props = {
    themeActual: boolean;
}

import { useState } from "react";
import { DataClima } from "@/types/DataClimateType";


export const ClimaFetch = ({ themeActual }: Props) => {

    const obterLatLon = async () => {
        try {
            const req = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputValue},BR&limit=1&appid=99a62839b2a5f6395c9dc68e036eaafd`)

            if (!req.ok) { throw new Error("Erro na requisição") }
            const json = await req.json();

            if (json.length === 0) { throw new Error("Cidade não encontrada") }

            return json;
        } catch {
            alert("Cidade não encontrada...")
            return null
        }

    }

    const searchCity = async () => {
        const latElon = await obterLatLon()

        if (latElon !== null) {
            const climaReq = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latElon[0].lat}&lon=${latElon[0].lon}&appid=99a62839b2a5f6395c9dc68e036eaafd&units=metric&lang=pt_br`)
            const climaJson = await climaReq.json()
            setDataClimate(climaJson)
        }
    }

    const [inputValue, setInputvalue] = useState("")
    const [dataClimate, setDataClimate] = useState<null | DataClima>(null)

    return (
        <div className={`${!themeActual ? "bg-lime-200 text-black" : "bg-gray-800 text-white"} rounded-2xl shadow-md shadow-black w-72 md:min-w-xl`} >
            {dataClimate === null &&
                <div className="flex flex-col items-center justify-between  min-h-40  p-4 " >
                    <div className="font-bold text-md md:text-2xl" >Digite o nome da sua cidade</div>
                    <input value={inputValue} onChange={(value) => setInputvalue(value.target.value)} className="focus:outline-none bg-white border border-black rounded-md p-0.5 shadow-md shadow-lime-950 md:w-md md:text-xl text-black" type="text" />
                    <button onClick={searchCity} className={`${!themeActual ? "bg-lime-700" : "bg-gray-950"} font-semibold text-white rounded-md text-2xl py-1 px-8 border border-black active:bg-gray-500`} >Buscar</button>
                </div>
            }
            {dataClimate !== null &&
                <div className="flex flex-col items-center justify-between min-h-40 p-4" >

                    <div className="text-xl md:text-3xl md:mb-4" >{dataClimate.name}</div>
                    
                    <div className="border rounded-xl flex flex-col md:flex-row items-center  w-full mt-2" >
                        <div className="text-4xl md:text-6xl md:w-1/2 flex justify-center" >{(dataClimate.main.temp).toFixed(1)} <p className="text-3xl" >°C</p></div>
                        <div className={`${!themeActual ? "bg-lime-900" : "bg-gray-950"} rounded-xl  flex justify-between items-center flex-col w-full md:w-auto p-4`} >
                            <img className="" src={`https://openweathermap.org/img/wn/${dataClimate.weather[0].icon}@4x.png`} alt="" />
                            <div className="text-2xl md:text-4xl text-white text-center" >{dataClimate.weather[0].description}</div>
                        </div>
                    </div>

                    <div className="w-full mt-12 text-md md:text-2xl" >

                        <div className="flex justify-between items-center border-b border-black/50 md:px-12" >
                            <p>Sensação Térmica</p>
                            <div>{(dataClimate.main.feels_like).toFixed(1)} °c</div>
                        </div>

                        <div className="flex justify-between items-center border-b border-black/50 md:px-12" >
                            <p>Umidade</p>
                            <div>{dataClimate.main.humidity}%</div>
                        </div>

                        <div className="flex justify-between items-center border-b border-black/50 md:px-12" >
                            <p>Velocidade do Vento</p>
                            <div>{dataClimate.wind.speed} m/s</div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}