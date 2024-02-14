import Sidebar from './components/Sidebar'
import MembersBar from "./components/MembersBar.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import {ThemeProvider} from "@/providers/ThemeProvider.jsx";
function App() {
    return (
        <ThemeProvider defaultTheme={"light"} storageKey={"vite-ui-theme"}>
            <div className={"App flex"}>
                <BrowserRouter>
                    <Sidebar/>
                    <div className={"flex-grow"}>

                        <Routes>
                            <Route path={"/"} element={<Home/>}/>
                            <Route path={"/projects"} element={<Projects/>}/>
                            <Route path={"/login"} element={<Login/>}/>
                            <Route path={"/signup"} element={<Signup/>}/>
                            <Route path={"*"} element={<Home/>}/>
                        </Routes>

                    </div>
                    <MembersBar/>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App
