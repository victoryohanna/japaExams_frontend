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
import SAT from "./pages/exams/Sat";
import OET from "./pages/exams/Oet";
import PTE from "./pages/exams/Pte";
import NotFound from "./pages/NotFound";
import FAQs from "./pages/FAQs";
import Qgre from "./components/faqs/Qgre";
import Qtoefl from "./components/faqs/Qtoefl";
import QIelts from "./components/faqs/Qielts";
import Qgmat from "./components/faqs/Qgmat"; 
import Qsat from "./components/faqs/Qsat"; 
import Qoet from "./components/faqs/Qoet";
import Qpte from "./components/faqs/Qpte";
import OurServices from "./pages/Services";
import AdmissionProcessing from "./components/ourServices/admissionProcessing";

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
        <Route path="/sat" element={<SAT/>}/>
        <Route path="/oet" element={<OET/>}/>
        <Route path="/pte" element={<PTE/>}/>
        <Route path="/faqs" element={<FAQs />}>
          <Route path="/faqs" element={<Qgre />} />
          <Route path="/faqs/gre" element={<Qgre />} />
          <Route path="/faqs/toefl" element={<Qtoefl />} />
          <Route path="/faqs/ielts" element={<QIelts/>}/>
          <Route path="/faqs/gmat" element={<Qgmat/>}/>
          <Route path="/faqs/sat" element={<Qsat/>}/>
          <Route path="/faqs/oet" element={<Qoet/>}/>
          <Route path="/faqs/pte" element={<Qpte/>}/>
        </Route>
        <Route path="/services" element={<OurServices/>}>
          <Route path="/services" element={<AdmissionProcessing/>}/>
          <Route path="/services/admissions" element={<AdmissionProcessing/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
