import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Service from "./pages/Service";
import Service2 from "./pages/Service2";
import Chat from "./components/Chat"

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/service" element={<Service/>}/>
            {/* <Route path="/response" element={<Service2/>}/> */}
            <Route path="/" element={<Chat />} />
            <Route path="/pages/Service2" element={<Service2 />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;