import React, { useContext } from 'react'
import { AppContext } from '../Context/App-context'

export default function Setting() {
    const context = useContext(AppContext)
    return (
        <input
            type="text"
            placeholder="Change Name"
            onChange={(e) =>
                context.setUser({
                    ...context.user,
                    name: e.target.value
                })
            }
            value={context.user.name ?? ''}
        />
    )
}
