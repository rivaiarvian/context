import { useContext } from "react"
import { AppContext } from "../Context/App-context"

export default function NavbarUserAvatar() {
    const context = useContext(AppContext)

    return <img src={context.user.avatar} alt="avatar" width={50} />
}
