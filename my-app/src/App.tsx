import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Legal from "./pages/Legal";
import Culture from "./pages/Culture";
import Community from "./pages/Community";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/legal" element={<Legal/>}/>
            <Route path="/culture" element={<Culture/>}/>
            <Route path="/community" element={<Community/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;