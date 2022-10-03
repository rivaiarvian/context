import { createContext, useContext, useEffect, useReducer } from "react";

export const AppContext = createContext({})

export function useAppContext() {
    return useContext(AppContext)
}

const initialState = {
    user: {},
    theme: 'dark'
}

function reducer(state, action) {
    switch (action.type) {
        case 'updateUser':
            return {
                ...state,
                user: action.payload
            };
        case 'toggleTheme':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        default:
            throw new Error("unexpected action" + action.type);
    }
}

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const User = {
            name: 'Rivai Arvian',
            avatar: 'https://randomuser.me/api/portraits/women/18.jpg'
        }

        dispatch({
            type: 'updateUser',
            payload: User
        })
    }, [])

    const appContextValue = [state,dispatch]

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    )
}