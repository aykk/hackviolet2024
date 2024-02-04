import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Legal from "./pages/Legal";
import Culture from "./pages/Culture";
import Community from "./pages/Community";
import Service from "./pages/Service";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/legal" element={<Legal/>}/>
            <Route path="/culture" element={<Culture/>}/>
            <Route path="/community" element={<Community/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;