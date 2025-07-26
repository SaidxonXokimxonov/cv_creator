import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Create } from "./pages/create";

export function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
        </Routes>
    </div>
  )
}
