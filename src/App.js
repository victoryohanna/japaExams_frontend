import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Registration";
import Footer from "./components/Footer";
import AboutUs from "./pages/About";
import GRE from "./pages/exams/Gre";
import TOEFL from "./pages/exams/Toefl";
import IELTS from "./pages/exams/ielts";
import GMAT from "./pages/exams/Gmat";
import NotFound from "./pages/NotFound";
import FAQs from "./pages/FAQs";
import Qgre from "./components/elements/faqs/Qgre";
import Qtoefl from "./components/elements/faqs/Qtoefl";
import QIelts from "./components/elements/faqs/Qielts";
import Qgmat from "./components/elements/faqs/Qgmat"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gre" element={<GRE />} />
        <Route path="/toefl" element={<TOEFL />} />
        <Route path="/ielts" element={<IELTS/>}/>
        <Route path="/gmat" element={<GMAT/>}/>
        <Route path="/faqs" element={<FAQs />}>
          <Route path="/faqs" element={<Qgre />} />
          <Route path="/faqs/gre" element={<Qgre />} />
          <Route path="/faqs/toefl" element={<Qtoefl />} />
          <Route path="/faqs/ielts" element={<QIelts/>}/>
          <Route path="/faqs/gmat" element={<Qgmat/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
