import { useAppContext } from "../Context/App-context"

export default function NavbarUserAvatar() {
    const context = useAppContext()

    return <img src={context.user.avatar} alt="avatar" width={50} />
}
