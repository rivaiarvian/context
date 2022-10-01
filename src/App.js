import { AppProvider } from './Context/App-context'
import Navbar from './Components/Navbar'
import Setting from './Components/Setting'
import DisplayTheme from './Components/DisplayTheme'
import ToggleTheme from './Components/ToggleTheme'

function App() {
   

    return (
        <div className="App">
            <AppProvider>
                <Navbar />
                <br/>
                <Setting />
                <br/>
                <DisplayTheme/>
                <br />
                <ToggleTheme />
            </AppProvider>
        </div>
    );
}

export default App;