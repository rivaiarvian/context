import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { AppContext } from './Context/App-context'

function App() {
    const [user, setUser] = useState({})

    useEffect(() => {
        const User = {
            name: 'Rivai Arvian',
            avatar: 'https://randomuser.me/api/portraits/women/18.jpg'
        }

        setUser(User)
    }, [])

    const appContextValue = {
        user: user,
    }

    return (
        <div className="App">
            <AppContext.Provider value={appContextValue}>
                <Navbar />
            </AppContext.Provider>
        </div>
    );
}

export default App;