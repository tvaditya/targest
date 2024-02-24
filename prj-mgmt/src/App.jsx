import Sidebar from './components/Sidebar'
import MembersBar from "./components/MembersBar.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import {ThemeProvider} from "@/providers/ThemeProvider.jsx";
import { useAuthContext} from "@/hooks/useAuthContext.js";
import Loading from "@/components/Loading.jsx";
import Profile from "./pages/Profile/Profile";

function App() {
    // const user = undefined;
    const { user, authIsReady } = useAuthContext();

    if (!authIsReady) {
        return <Loading/>;
    }

    return (
        <ThemeProvider defaultTheme={"light"} storageKey={"vite-ui-theme"}>
            <div className={"App flex"}>
                <BrowserRouter>
                    {user ? (
                        <>
                            <Sidebar/>
                            <div className={"flex-grow"}>
                                <Routes>
                                    <Route exaact path={"/"} element={<Home/>}/>
                                    <Route path={"/profile"} element={<Profile/>}/>
                                    <Route path={"/projects"} element={<Projects/>}/>
                                    <Route path={"*"} element={<Home/>}/>
                                </Routes>
                            </div>
                            <MembersBar/>
                        </> ) : (
                            <Routes>
                                <Route path={"/login"} element={<Login/>}/>
                                <Route path={"/signup"} element={<Signup/>}/>
                                <Route path={"*"} element={<Signup/>}/>
                            </Routes>
    )
                    }

                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App
