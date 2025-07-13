import { createContext } from "react";

export type ThemeContextType = {
    Theme: boolean,
    switchTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    Theme: false,
    switchTheme: () => { }
})