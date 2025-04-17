import { Home } from "./component/Pages/Home";  
import { About } from "./component/Pages/About";  
import Contact from "./component/Pages/Contact"; 
import Navbar from "./component/Navbar";  

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/resume-react">  
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;









