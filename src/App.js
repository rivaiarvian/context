import { AppProvider } from './Context/App-context'
import { ThemeProvider } from './Context/Theme-context'
import Navbar from './Components/Navbar'
import Setting from './Components/Setting'
import DisplayTheme from './Components/DisplayTheme'
import ToggleTheme from './Components/ToggleTheme'
// import Reducer from './Components/Reducer'

function App() {


    return (
        <div className="App">
            <AppProvider>
                <ThemeProvider>
                    <Navbar />
                    <br />
                    <Setting />
                    <br />
                    <DisplayTheme />
                    <br />
                    <ToggleTheme />
                    <br />
                    <br />
                    <br />
                    <hr />
                    {/* <Reducer /> */}
                </ThemeProvider>
            </AppProvider>
        </div>
    );
}

export default App;