import { useThemeContext } from "../Context/Theme-context"

export default function ToggleTheme() {
    const [, dispatch] = useThemeContext()
    return (
        <button onClick={() => dispatch({ type: 'toggleTheme' })}>Toggle</button>
    )
}
