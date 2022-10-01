import React, { useContext } from 'react'
import { AppContext } from '../Context/App-context'

export default function ToggleTheme() {
    const context = useContext(AppContext)
    return (
        <button onClick={() => context.setTheme(context.theme === 'light' ? 'dark' : 'light')}>Toggle</button>
    )
}
