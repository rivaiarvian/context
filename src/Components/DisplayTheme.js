import { useAppContext } from "../Context/App-context"

export default function DisplayTheme() {
    const context = useAppContext()
    return (
        <div>{context.theme}</div>
    )
}
