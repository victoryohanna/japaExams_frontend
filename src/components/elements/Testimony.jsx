import "../../sass/testimony.scss";

const Testimonials = () => {
  return (
    <div className="container">
      <h2>Testimonials</h2>
      <div
        className="carousel slide carousel-fade testimony-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active d-flex">
            <div className="img-section"></div>
            <div className="text-section">
              <p>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus quis eveniet ullam neque atque cum, minima
                ducimus blanditiis? Aut vitae fugit deleniti quaerat
                perspiciatis aperiam nobis debitis veritatis quo.
              </p>
            </div>
          </div>
          <div className="carousel-item d-flex">
            <div className="img-section"></div>
            <div className="text-section">
              <p>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus quis eveniet ullam neque atque cum, minima
                ducimus blanditiis? Aut vitae fugit deleniti quaerat
                perspiciatis aperiam nobis debitis veritatis quo.
              </p>
            </div>
          </div>
          <div className="carousel-item d-flex">
            <div className="img-section"></div>
            <div className="text-section">
              <p>
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus quis eveniet ullam neque atque cum, minima
                ducimus blanditiis? Aut vitae fugit deleniti quaerat
                perspiciatis aperiam nobis debitis veritatis quo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
