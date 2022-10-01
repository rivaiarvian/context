import { useEffect, useState } from 'react'
import { AppContext } from './Context/App-context'
import Navbar from './Components/Navbar'
import Setting from './Components/Setting'
import DisplayTheme from './Components/DisplayTheme'
import ToggleTheme from './Components/ToggleTheme'

function App() {
    const [user, setUser] = useState({})
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const User = {
            name: 'Rivai Arvian',
            avatar: 'https://randomuser.me/api/portraits/women/18.jpg'
        }

        setUser(User)
    }, [])

    const appContextValue = {
        user: user,
        setUser,
        theme,
        setTheme
    }

    return (
        <div className="App">
            <AppContext.Provider value={appContextValue}>
                <Navbar />
                <br/>
                <Setting />
                <br/>
                <DisplayTheme/>
                <br />
                <ToggleTheme />
            </AppContext.Provider>
        </div>
    );
}

export default App;