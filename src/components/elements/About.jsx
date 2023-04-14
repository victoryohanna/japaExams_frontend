import "../../sass/about.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About JapaExams</h2>
        <h5>Professional International Exams Tutor</h5>
      </div>
      <div className="about-details ">
        
          <p>
            Welcome to JapaExams, a platform with over 13 years of experience in
            providing end-to-end study abroad and immigration services. Our
            commitment to excellence and professionalism has earned us a
            reputation as a trusted partner for students and professionals
            seeking to study or work abroad. We offer a comprehensive range of
            services, including exam registration, admission processing, visa
            processing, proof of fund services, and statement of purpose
            writing, all designed to simplify the study and work abroad process.
          </p>
          <p>
            Our team of experts are dedicated to providing personalized guidance
            and support to each client, ensuring that they have the resources
            and assistance they need to achieve their academic and professional
            goals. Whether you are a student or a professional, we are here to
            help you navigate the complexities of studying abroad and to make
            your experience as smooth and stress-free as possible. Choose us as
            your partner in your study and work abroad journey and join the
            hundreds of satisfied clients who have entrusted us with their study
            and work abroad dreams.
          </p>
          <span className="more-about"><Link to="/about">More details about us...</Link></span>
      </div>
    </div>
  );
};

export default About;
