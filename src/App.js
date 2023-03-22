import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Etiquette from "./Etiquette";
import Contact from "./Contact";
import Services from "./Services";
import Jess from "./Jess";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="etiquette" element={<Etiquette />} />
          <Route path="jess" element={<Jess />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
