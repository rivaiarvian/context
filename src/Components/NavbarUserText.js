import { useContext } from "react"
import { AppContext } from "../Context/App-context"

export default function NavbarUserText() {
    const context = useContext(AppContext)
    
    return <span>Hi, {context.user.name}!</span>
}
