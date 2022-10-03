import { useAppContext } from "../Context/App-context"

export default function ToggleTheme() {
    const [, dispatch] = useAppContext()
    return (
        <button onClick={() => dispatch({ type: 'toggleTheme' })}>Toggle</button>
    )
}
