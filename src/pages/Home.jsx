
import '../sass/home.scss';
import Header from "../components/Header";
import About from "../components/elements/About";
import Quicklinks from "../components/elements/Quicklinks";
import Testimonials from "../components/elements/Testimony";
const Home =()=>{
    return(
        <>
            <div className="header">
               <Header/> 
            </div>
            <div className="about">
                <About/>
            </div>
            <div className="q-links">
                <Quicklinks/>
            </div>
            <div className="testimony">
               <Testimonials/> 
            </div>
        </>
    )
}

export default Home;