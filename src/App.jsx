import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Gallary from "./pages/Gallary/gallery";
import Footer from "./components/footer/footer";
import Faq from "./pages/FAQ/Faq";
import Contact from "./pages/Contact/contact";
import NotFound from "./pages/NotFound/notFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
