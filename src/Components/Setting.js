import { useAppContext } from "../Context/App-context"
export default function Setting() {
    const [state,dispatch] = useAppContext()
    return (
        <input
            type="text"
            placeholder="Change Name"
            onChange={(e) =>
                dispatch({
                    type:'updateUser',
                    payload: {
                        ...state.user,
                        name: e.target.value
                    }
                })
            }
            value={state.user.name ?? ''}
        />
    )
}
