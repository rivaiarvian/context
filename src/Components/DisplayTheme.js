import React, { useContext } from 'react'
import { AppContext } from '../Context/App-context'

export default function DisplayTheme() {
    const context = useContext(AppContext)
    return (
        <div>{context.theme}</div>
    )
}
