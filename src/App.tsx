import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Service from "./pages/Service";
import Service2 from "./pages/Service2";
import AboutUs from "./pages/AboutUs";
import Resources from "./pages/Resources";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/pages/response" element={<Service2 />} />
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/resources" element={<Resources/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;