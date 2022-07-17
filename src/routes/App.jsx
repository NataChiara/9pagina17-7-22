import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Link from "../pages/Link";
import NotFound from "../pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Link" element={<Link/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;