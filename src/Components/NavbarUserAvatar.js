import { useAppContext } from "../Context/App-context"

export default function NavbarUserAvatar() {
    const [state] = useAppContext()

    return <img src={state.user.avatar} alt="avatar" width={50} />
}
