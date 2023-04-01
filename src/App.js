import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Etiquette from "./Etiquette";
import Contact from "./Contact";
import Services from "./Services";
import Jess from "./Jess";
import Book from "./Book";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="etiquette" element={<Etiquette />} />
          <Route path="jess" element={<Jess />} />
          <Route path="book" element={<Book />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
