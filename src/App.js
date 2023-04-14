import {Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import AboutUs from "./pages/About";
import GRE from "./pages/exams/Gre";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<AboutUs/>}/>
        <Route exact path='/gre' element={<GRE/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
