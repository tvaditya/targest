import Sidebar from './components/Sidebar'
import MembersBar from "./components/MembersBar.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className={"App flex"}>
            <Sidebar/>
            <div className={"flex-grow"}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<div>Página inicial</div>}/>
                        <Route path={"/profile"} element={<div>Meus projetos</div>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <MembersBar/>
        </div>
    );
}

export default App
