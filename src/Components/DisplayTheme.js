import { useAppContext } from "../Context/App-context"

export default function DisplayTheme() {
    const [state] = useAppContext()
    return (
        <div>{state.theme}</div>
    )
}
