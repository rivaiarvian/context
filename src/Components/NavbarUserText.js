import { useAppContext } from "../Context/App-context"

export default function NavbarUserText() {
    const [state] = useAppContext()
    
    return <span>Hi, {state.user.name}!</span>
}
