import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({})

export function useAppContext() {
    return useContext(AppContext)
}

export function AppProvider({ children }) {
    const [user, setUser] = useState({})
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const User = {
            name: 'Rivai Arvian',
            avatar: 'https://randomuser.me/api/portraits/women/18.jpg'
        }

        setUser(User)
    }, [])

    const appContextValue = {
        user: user,
        setUser,
        theme,
        setTheme
    }

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    )
}