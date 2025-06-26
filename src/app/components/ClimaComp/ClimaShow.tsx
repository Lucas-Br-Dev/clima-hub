import { ClimaFetch } from "./ClimaFetch"

type Props = {
    themeActual: boolean;
}

export const ClimaShow = ({themeActual}: Props) => {
    return (
        <div className="h-full flex items-center" >
            <ClimaFetch themeActual={themeActual} />
        </div>
    )
}