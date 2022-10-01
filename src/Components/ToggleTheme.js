import { useAppContext } from "../Context/App-context"

export default function ToggleTheme() {
    const context = useAppContext()
    return (
        <button onClick={() => context.setTheme(context.theme === 'light' ? 'dark' : 'light')}>Toggle</button>
    )
}
