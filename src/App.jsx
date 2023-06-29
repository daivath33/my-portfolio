import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Info from "./pages/Info/Info";
import Projects from "./pages/Projects/Projects";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;

// https://dunks1980.com/
//https://codepen.io/amit_sheen/pen/LYNKerG
//https://codepen.io/joyanna/pen/NWGYLNW
//https://redstapler.co/create-border-length-animation-with-pure-css/
//https://www.youtube.com/watch?v=4ZxzqiAh3WA&ab_channel=RedStapler
