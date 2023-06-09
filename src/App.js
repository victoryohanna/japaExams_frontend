import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
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
import Duolingo from "./pages/exams/Duolingo";
import NotFound from "./pages/NotFound";
import FAQs from "./pages/FAQs";
import Qgre from "./components/faqs/Qgre";
import Qtoefl from "./components/faqs/Qtoefl";
import QIelts from "./components/faqs/Qielts";
import Qgmat from "./components/faqs/Qgmat";
import Qsat from "./components/faqs/Qsat";
import Qoet from "./components/faqs/Qoet";
import Qpte from "./components/faqs/Qpte";
import Qduolingo from "./components/faqs/Qduolingo";
import OurServices from "./pages/Services";
import AdmissionProcessing from "./components/ourServices/admissionProcessing";
import PersonalStatement from "./components/ourServices/sop";
import ProofOfFund from "./components/ourServices/proofOfFund";
import Passports from "./components/ourServices/passport";
import Visa from "./components/ourServices/visa";
import ReportScores from "./components/ourServices/scoreReporting";
import Consultancy from "./components/ourServices/consultancy";
import StudyMaterials from "./components/materials/studyMaterials";
import ClassTutorials from "./components/tutorials/classes";
import PersonalTutor from "./components/tutorials/personalTutor";
import PriceList from "./components/materials/pricing";
import AdminDashboard from "./pages/admin";
import UserLandingPage from "./pages/user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<UserLandingPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gre" element={<GRE />} />
          <Route path="/toefl" element={<TOEFL />} />
          <Route path="/ielts" element={<IELTS />} />
          <Route path="/gmat" element={<GMAT />} />
          <Route path="/sat" element={<SAT />} />
          <Route path="/oet" element={<OET />} />
          <Route path="/pte" element={<PTE />} />
          <Route path="/duolingo" element={<Duolingo />} />
          <Route path="/faqs" element={<FAQs />}>
            <Route path="/faqs" element={<Qgre />} />
            <Route path="/faqs/gre" element={<Qgre />} />
            <Route path="/faqs/toefl" element={<Qtoefl />} />
            <Route path="/faqs/ielts" element={<QIelts />} />
            <Route path="/faqs/gmat" element={<Qgmat />} />
            <Route path="/faqs/sat" element={<Qsat />} />
            <Route path="/faqs/oet" element={<Qoet />} />
            <Route path="/faqs/pte" element={<Qpte />} />
            <Route path="/faqs/duolingo" element={<Qduolingo />} />
          </Route>
          <Route path="/services" element={<OurServices />}>
            <Route path="/services" element={<AdmissionProcessing />} />
            <Route
              path="/services/admissions"
              element={<AdmissionProcessing />}
            />
            <Route path="/services/proof-fund" element={<ProofOfFund />} />
            <Route path="/services/passports" element={<Passports />} />
            <Route path="/services/visa" element={<Visa />} />
            <Route
              path="/services/personal-statements"
              element={<PersonalStatement />}
            />
            <Route
              path="/services/score-reporting"
              element={<ReportScores />}
            />
            <Route path="/services/consultancy" element={<Consultancy />} />
          </Route>
          <Route path="/materials" element={<StudyMaterials />} />
          <Route path="/tutorials" element={<ClassTutorials />} />
          <Route path="/tutors" element={<PersonalTutor />} />
          <Route path="/pricing" element={<PriceList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
