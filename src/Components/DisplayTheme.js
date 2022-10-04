import { useThemeContext } from "../Context/Theme-context"

export default function DisplayTheme() {
    const [state] = useThemeContext()
    
    return (
        <div>{state.theme}</div>
    )
}
