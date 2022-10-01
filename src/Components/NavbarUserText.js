import { useAppContext } from "../Context/App-context"

export default function NavbarUserText() {
    const context = useAppContext()

    return <span>Hi, {context.user.name}!</span>
}
