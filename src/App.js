import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/About";
import GRE from "./pages/exams/Gre";
import TOEFL from "./pages/exams/Toefl";
import IELTS from "./pages/exams/ielts";
import NotFound from "./pages/NotFound";
import FAQs from "./pages/FAQs";
import Qgre from "./components/elements/faqs/Qgre";
import Qtoefl from "./components/elements/faqs/Qtoefl";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gre" element={<GRE />} />
        <Route path="/toefl" element={<TOEFL />} />
        <Route path="/ielts" element={<IELTS/>}/>
        <Route path="/faqs" element={<FAQs />}>
          <Route path="/faqs" element={<Qgre />} />
          <Route path="/faqs/gre" element={<Qgre />} />
          <Route path="/faqs/toefl" element={<Qtoefl />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
