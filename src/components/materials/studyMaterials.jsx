import "../../sass/materials/studyMaterials.scss";
import { exams } from "../elements/index";

const StudyMaterials = () => {
  return (
    <div className="container">
      <div className="text-header">
        <h2>
          Get Study Materials [GRE, TOEFL, SAT, IELTS, GMAT, OET, PTE, DET] -
          Your Key to Success
        </h2>
      </div>
      <div className="content">
        <p>
          Our free study materials are a great way to get started on your
          learning journey. You'll have access to high-quality content,
          including practice questions, study guides, and more. With our free
          materials, you can get a taste of what we have to offer and see if
          it's right for you.
        </p>
        <p>
          But if you want to take your learning to the next level, our
          affordable paid version is the way to go. With this version, you'll
          have access to rich and highly illustrative content that you won’t
          find anywhere else. Our paid materials include in-depth tutorials,
          videos, proven tips and strategies, and exercises that mirror the
          actual test. Plus, you'll get lifetime access to all the materials, so
          you can continue to learn and grow at your pace.
        </p>
        <p>
          So why wait? Request or order study materials today. Don't miss out on
          this opportunity to invest in yourself and achieve your goals.{" "}
        </p>
        <div className="exams">
          <div className="row">
            {exams.map((item) => {
              return (
                <div className="col-md-4" key={item.id}>
                  <div className="card-section">
                    <img src={item.image} alt="" />
                    <div className="button-section">
                      <button className="btn btn-primary">
                        Order Full Pack
                      </button>
                      <button className="btn btn-primary">Get Free Pack</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
