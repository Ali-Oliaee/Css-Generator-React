import React, { createContext, useState } from 'react'

export const MainContext = createContext()

export default function MainContextProvider({ children }) {
    const [menuActive, setMenuActive] = useState(false)
    const [copyClickText, setcopyClickText] = useState(false)

    const btnCopyTextChange = () => {
        setcopyClickText(true)
        setTimeout(() => {
            setcopyClickText(false)
        }, 3000);
    }
    return (
        <MainContext.Provider
            value={{
                menuActive,
                setMenuActive,
                copyClickText,
                setcopyClickText,
                btnCopyTextChange
            }}
        >
            {children}
        </MainContext.Provider>
    )
}
