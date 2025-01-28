import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Gallery from "./pages/Gallery/gallery";
import Footer from "./components/footer/footer";
import Question from "./pages/Question/question";
import Contact from "./pages/Contact/contact";
import NotFound from "./pages/NotFound/notFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/question" element={<Question />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
